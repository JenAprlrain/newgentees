export interface HouseCollectionType {
  id: string;
  contract_id: string;
  title: string;
  description: string;
  website: string;
  link: string;
  type: string;
  image: Image[];
  contract: Contract;
}

export interface Image {
  id: string;
  image: string;
  profile_image?: boolean;
  house_collection_id: string;
  partner_id: any;
}

export interface Contract {
  id: string;
  address: string;
  chain_id: any;
  abi: any;
  name: string;
  type: string;
}
