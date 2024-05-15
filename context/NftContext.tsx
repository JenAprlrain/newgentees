import { getClaims } from "@/api/claim";
import { EVMRead } from "@/chains/evm";
import { getClaimableCollections, getCollections } from "@/chains/sui";
import { MOCKUP_CONTRACTS } from "@/constants/mockup";
import { Claim, Contract } from "@/types/claim";
import { NFT } from "@/types/tees";
import { useCurrentAccount } from "@mysten/dapp-kit";
import {
  useContext,
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
  useCallback,
} from "react";
import toast from "react-hot-toast";
import { useInterval } from "usehooks-ts";
import { useAccount } from "wagmi";

const NftContext = createContext<{
  nftCollections: {
    name: string;
    nfts: NFT[];
  }[];
  isSuiConnected: boolean;
  isEthConnected: boolean;
}>({
  nftCollections: [],
  isSuiConnected: false,
  isEthConnected: false,
});

export function useNft() {
  return useContext(NftContext);
}

export const NftProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const suiAccount = useCurrentAccount();
  const ethAccount = useAccount();
  const [collections, setCollections] = useState<Contract[]>([]);

  const [nftCollections, setNftCollections] = useState<
    {
      name: string;
      nfts: NFT[];
    }[]
  >([]);

  const fetchNftCollections = useCallback(async () => {
    if (suiAccount) {
      getClaimableCollections(suiAccount.address, collections)
        .then((inner_collections) => {
          collections.forEach((contract) => {
            if (contract.type !== "move") return;

            const nfts = inner_collections.filter(
              (collection) => collection.type === contract.address
            );

            // if there is collection already, update nfts
            if (nftCollections.find((c) => c.name === contract.name)) {
              setNftCollections((prev) =>
                prev.map((c) => {
                  if (c.name === contract.name) {
                    return {
                      ...c,
                      nfts: [
                        ...nfts.map((nft) => ({
                          id: nft.id.id,
                          image: nft.image,
                          name: nft.name,
                          collectionAddress: nft.type,
                        })),
                      ],
                    };
                  }
                  return c;
                })
              );
              return;
            }

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
        })
        .catch(() => {
          toast.error("Failed to fetch NFTs");
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
  }, [ethAccount, suiAccount, nftCollections, collections]);

  useEffect(() => {
    fetchNftCollections();
  }, [collections]);

  useEffect(() => {
    getClaims()
      .then((res) => res.json())
      .then((data: Claim[]) => {
        setCollections(data.map((claim) => claim.contract));
      })
      .catch(() => {
        toast.error("Failed to fetch collections");
      });
  }, []);

  useInterval(fetchNftCollections, 20000);

  return (
    <NftContext.Provider
      value={{
        nftCollections,
        isSuiConnected: !!suiAccount,
        isEthConnected: ethAccount.isConnected,
      }}
    >
      {children}
    </NftContext.Provider>
  );
};
