export type GalleryType = {
  image: {
    id: string;
    image: string;
    profile_image: boolean | null;
    house_collection_id: string | null;
    partner_id: string | null;
    claim_id: string | null;
    gallery_id: string | null;
  };
  index: number;
  id: string;
};

export type NormalizedGallery = {
  image: {
    id?: string;
    image?: string;
  };
  index: number;
  id: string;
};
