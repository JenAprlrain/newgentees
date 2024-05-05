import { KioskClient, Network } from "@mysten/kiosk";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { MOCKUP_CLAIMS } from "@/constants/mockup";
import { availableNFTs } from "@/api";
import { NFT, TeesContract } from "@/types/tees";
import invariant from "ts-invariant";

export const SUIClient = new SuiClient({ url: getFullnodeUrl("mainnet") });

export const KIOSKClient = new KioskClient({
  client: SUIClient,
  network: Network.MAINNET,
});

interface ImageNFT {
  data: Data;
  error: any;
}

interface Data {
  description: string;
  image_url: string;
  link: string;
  name: string;
  project_url: string;
}

interface NFTContent {
  dataType: string;
  type: string;
  hasPublicTransfer: boolean;
  fields: Fields;
}

interface Fields {
  description: string;
  id: Id;
  name: string;
  url: string;
}

interface Id {
  id: string;
}

export async function getCollections(address: string) {
  const kiosks = await KIOSKClient.getOwnedKiosks({
    address: address,
  });

  const kioskContents = await Promise.all(
    kiosks.kioskIds.map(async (kiosk) => {
      const content = await KIOSKClient.getKiosk({
        id: kiosk,
      });

      return content.itemIds;
    })
  );

  const nftCollections = await Promise.all(
    kioskContents.flat().map(async (content) => {
      const nft = await SUIClient.getObject({
        id: content,
        options: {
          showContent: true,
          showDisplay: true,
        },
      });

      if (
        !nft.data ||
        !nft.data.display ||
        !nft.data.display ||
        !nft.data.content
      )
        return undefined;

      let imageNFT: ImageNFT = nft.data.display as any as ImageNFT;
      let dataContent: NFTContent = nft.data.content as any as NFTContent;

      if (!imageNFT.data.name || !imageNFT.data.image_url) return undefined;

      return {
        id: dataContent.fields.id,
        image: imageNFT.data.image_url,
        name: imageNFT.data.name,
        type: dataContent.dataType,
      };
    })
  );

  return nftCollections.filter((nft) => nft !== undefined) as {
    id: {
      id: string;
    };
    image: string;
    name: string;
    type: string;
  }[];
}

export async function getClaimableCollections(
  address: string,
  claims: TeesContract[]
) {
  const filteredClaims = claims.filter((claim) => claim.type === "SUI");
  const collections = await getCollections(address);

  const filtered = collections.filter((collection) =>
    filteredClaims.some((claim) => {
      invariant(claim.type === "SUI", "Invalid contract type");
      return claim.objectType === collection.type;
    })
  );

  const availableIds = await availableNFTs(filtered.map((nft) => nft.id.id));
  return filtered.filter((nft) => availableIds.includes(nft.id.id));
}
