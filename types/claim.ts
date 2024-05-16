export interface Claim {
  id: string;
  contract_id: string;
  image_id: string;
  open: string;
  title: string;
  specs: string;
  care: string;
  eligibility: string;
  chart: string;
  succesful: string;
  link: string;
  open_for_claim: boolean;
  image: Image;
  contract: Contract;
}

export interface Image {
  id: string;
  image: string;
  profile_image: any;
  house_collection_id: any;
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
