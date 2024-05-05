import { EVMRead } from "@/chains/evm";
import { getCollections } from "@/chains/sui";
import { Dropdown } from "@/components/input/dropdown";
import { MOCKUP_CONTRACTS } from "@/constants/mockup";
import { NFT } from "@/types/tees";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/button";

export const Tees = () => {
  const [activeItem, setActiveItem] = useState<string>(
    MOCKUP_CONTRACTS[0].name
  );
  const suiAccount = useCurrentAccount();
  const ethAccount = useAccount();
  const { openConnectModal } = useConnectModal();
  const { disconnectAsync } = useDisconnect();

  const [nftCollections, setNftCollections] = useState<
    {
      name: string;
      nfts: NFT[];
    }[]
  >([]);

  useEffect(() => {
    if (suiAccount) {
      getCollections(suiAccount.address).then((collections) => {
        MOCKUP_CONTRACTS.forEach((contract) => {
          if (contract.type !== "SUI") return;

          const nfts = collections.filter(
            (collection) => collection.type === contract.objectType
          );

          setNftCollections((prev) => [
            ...prev,
            {
              name: contract.name,
              nfts: [
                ...nfts.map((nft) => ({
                  id: nft.id.id,
                  image: nft.image,
                  name: nft.name,
                  collectionAddress: nft.type,
                })),
              ],
            },
          ]);
        });
      });
    }

    if (ethAccount) {
      MOCKUP_CONTRACTS.forEach(async (contract) => {
        if (contract.type !== "EVM") return;
        if (!ethAccount.address) return;

        try {
          const nfts = await EVMRead(contract, {
            address: ethAccount.address,
          });

          setNftCollections((prev) => [
            ...prev,
            {
              name: contract.name,
              nfts: [
                ...nfts.map((nft) => ({
                  id: nft.id,
                  image: nft.image,
                  name: nft.name,
                  collectionAddress: contract.address,
                })),
              ],
            },
          ]);
        } catch (e) {
          toast.error("Failed to fetch NFTs");
          return;
        }
      });
    }
  }, [suiAccount, ethAccount]);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-normal text-3xl leading-8 flex flex-col">
        <div className="flex flex-row gap-2 mb-4">
          <Dropdown
            label="MY TEES:"
            items={[...MOCKUP_CONTRACTS.map((tee) => tee.name)]}
            selectedItem={activeItem}
            onSelectChange={setActiveItem}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {nftCollections
          .find((tees) => tees.name === activeItem)
          ?.nfts.map((nft, index) => (
            <div
              key={index + nft.id}
              className="flex items-center justify-center"
            >
              <img src={nft.image} alt={nft.name} />
            </div>
          ))}
      </div>
      {nftCollections.length === 0 && (
        <div className="text-center text-lg">
          You don&apos;t have any tees yet
        </div>
      )}
      {nftCollections.find((tees) => tees.name === activeItem)?.nfts.length ===
        0 && (
        <div className="text-center text-lg">
          You don&apos;t have any tees in this collection yet
        </div>
      )}
      <Button
        onClick={async () => {
          if (ethAccount.isConnected) {
            await disconnectAsync();
          } else {
            openConnectModal && openConnectModal();
          }
        }}
      >
        {ethAccount.isConnected ? "Disconnect" : "Connect"}
      </Button>
    </div>
  );
};
