import { KioskClient, Network } from "@mysten/kiosk";
import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { availableNFTs } from "@/api";
import { NFT, TeesContract } from "@/types/tees";
import invariant from "ts-invariant";
import { Contract } from "@/types/claim";

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
        type: dataContent.type,
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
  claims: Contract[]
) {
  const collections = await getCollections(address);

  const filtered = collections.filter((collection) =>
    claims.some((claim) => {
      invariant(claim.type === "move", "Invalid contract type");
      return claim.address === collection.type;
    })
  );

  const availableIds = await availableNFTs(filtered.map((nft) => nft.id.id));
  return filtered.filter((nft) => availableIds.includes(nft.id.id));
}
