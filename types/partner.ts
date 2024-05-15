export interface Partner {
  id: string;
  title: string;
  description: string;
  website: string;
  link: string;
  image: Image[];
}

export interface Image {
  id: string;
  image: string;
  profile_image?: boolean;
  house_collection_id: any;
  partner_id: string;
  claim_id: any;
}
