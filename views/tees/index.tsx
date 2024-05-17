import { EVMRead } from "@/chains/evm";
import { getCollections } from "@/chains/sui";
import { Dropdown } from "@/components/input/dropdown";
import { NFT } from "@/types/tees";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAccount, useDisconnect } from "wagmi";
import { Button } from "@/components/button";
import { useNft } from "@/context/NftContext";
import { Contract, HouseCollectionType } from "@/types/house-collections";

export const Tees = ({
  housecollections,
}: {
  housecollections: HouseCollectionType[];
}) => {
  console.log(housecollections);
  const [activeItem, setActiveItem] = useState<HouseCollectionType | undefined>(
    housecollections[0] || undefined
  );
  const { openConnectModal } = useConnectModal();
  const { disconnectAsync } = useDisconnect();
  const { nftCollections, isEthConnected } = useNft();

  useEffect(() => {
    setActiveItem(housecollections[0]);
  }, [housecollections]);

  if (housecollections.length === 0) {
    return (
      <div className="text-center text-lg">
        You don&apos;t have any tees yet
      </div>
    );
  }

  if (!activeItem) {
    return (
      <div className="text-center text-lg">
        You don&apos;t have any tees in this collection yet
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="font-normal text-3xl leading-8 flex flex-col">
        <div className="flex flex-row gap-2 mb-4">
          <Dropdown
            label="MY TEES:"
            items={[
              ...housecollections
                .filter((collection) => collection.contract)
                .filter((collection) => collection.contract.type === "evm")
                .map((tee) => tee.title),
            ]}
            selectedItem={activeItem.title}
            onSelectChange={(item) =>
              setActiveItem(
                housecollections.find((tee) => tee.title === item) ||
                  housecollections[0]
              )
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {nftCollections
          .find((tees) => tees.name === activeItem.contract.name)
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
      {nftCollections.find((tees) => tees.name === activeItem.contract.name) ===
        undefined && (
        <div className="text-center text-lg">
          You don&apos;t have any tees in this collection yet
        </div>
      )}
      <Button
        onClick={async () => {
          if (isEthConnected) {
            await disconnectAsync();
          } else {
            openConnectModal && openConnectModal();
          }
        }}
      >
        {isEthConnected ? "[Disconnect]" : "[Connect]"}
      </Button>
    </div>
  );
};
