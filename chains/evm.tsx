import { fantom } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { readContract } from "@wagmi/core";
import { NFT, TeesContract } from "@/types/tees";
import { invariant } from "ts-invariant";

export const WagmiConfig = getDefaultConfig({
  appName: "NFTees",
  chains: [fantom],
  projectId: "a8098b0ed3c862286bd078dfd784e49f",
});

export async function EVMRead(
  collection: TeesContract,
  account: { address: string }
): Promise<NFT[]> {
  invariant(collection.type === "EVM", "Invalid contract type");

  const nftCount = (await readContract(WagmiConfig, {
    address: collection.address as `0x${string}`,
    abi: collection.abi,
    functionName: "balanceOf",
    args: [account.address],
  })) as number;

  const uniqueNFTs = [];

  for (let i = 0; i < nftCount; i++) {
    const tokenId = await readContract(WagmiConfig, {
      address: collection.address as `0x${string}`,
      abi: collection.abi,
      functionName: "tokenOfOwnerByIndex",
      args: [account.address, i],
    });

    const nft = (await readContract(WagmiConfig, {
      address: collection.address as `0x${string}`,
      abi: collection.abi,
      functionName: "tokenURI",
      args: [tokenId],
    })) as string;

    const nftMetadataUri = await fetch(nft);
    const nftMetadata = await nftMetadataUri.json();

    uniqueNFTs.push({
      id: tokenId,
      image: nftMetadata.image,
      name: nftMetadata.name,
      collectionAddress: collection.address,
    });
  }

  return uniqueNFTs as NFT[];
}
