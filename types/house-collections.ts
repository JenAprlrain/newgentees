export interface HouseCollectionType {
  id: string;
  contract_id: string;
  title: string;
  description: string;
  website: string;
  link: string;
  type: string;
  image: Image[];
}

export interface Image {
  id: string;
  image: string;
  profile_image?: boolean;
  house_collection_id: string;
  partner_id: any;
}
