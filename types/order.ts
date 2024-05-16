export interface Order {
  id: string;
  nft_id: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  zip: string;
  collection: string;
  physical_size: string;
  claim_id: string;
  creation: string;
  nft: Nft;
  claim: Claim;
}

export interface Nft {
  id: string;
  address: string;
  nft: string;
  signature: string;
}

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
  contract: Contract;
}

export interface Contract {
  id: string;
  address: string;
  chain_id: any;
  abi: any;
  name: string;
  type: string;
}
