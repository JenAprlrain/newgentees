export type TeesContract = TeesEVMContract | TeesSUIContract;

export type NFT = {
  id: string;
  image: string;
  name: string;
  collectionAddress: string;
};

type TeesEVMContract = {
  address: string;
  abi: any;
  name: string;
  type: "EVM";
};

type TeesSUIContract = {
  type: "SUI";
  objectType: string;
  name: string;
};
