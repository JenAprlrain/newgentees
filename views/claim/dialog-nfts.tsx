import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { useNft } from "@/context/NftContext";
import Link from "next/link";

export const NftsDialog = ({
  name,
  nftId,
}: {
  name: string;
  nftId: string;
}) => {
  const { nftCollections } = useNft();

  return (
    <Dialog>
      <DialogTrigger>
        <button className="text-blue-500">[VIEW NFTS]</button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Claimable NFTs</DialogTitle>
          <DialogDescription>
            <div className="text-sm text-gray-300">
              {nftCollections
                .find((collection) => collection.name === name)
                ?.nfts.map((nft) => (
                  <Link key={nft.id} href={`/degen/claim/${name}/${nft.id}`}>
                    <div>
                      <img
                        src={nft.image}
                        alt={nft.name}
                        className="max-w-[100px] h-full object-cover"
                      />
                      <div>{nft.name}</div>
                    </div>
                  </Link>
                ))}
              {nftCollections.find((collection) => collection.name === name)
                ?.nfts.length === 0 && (
                <div className="text-center">No NFTs available</div>
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
