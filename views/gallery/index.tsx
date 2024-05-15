import { getGalleryImages } from "@/api/gallery";
import { MOCKUP_GALLERY } from "@/constants/mockup";
import { GalleryType } from "@/types/gallery";
import { useEffect, useState } from "react";

export const Gallery = () => {
  const [images, setImages] = useState<GalleryType[]>([]);

  useEffect(() => {
    getGalleryImages().then((res) => {
      if (res.ok) {
        res.json().then((data: GalleryType[]) => {
          setImages(data.sort((a, b) => a.index - b.index));
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-3xl">Gallery</div>
      <div className="grid grid-cols-3 gap-1">
        {images.map((photo, index) => (
          // make images square
          <div
            key={index}
            className="relative w-full"
            style={{ paddingBottom: "100%" }}
          >
            <img
              src={photo.image.image}
              className="absolute object-cover w-full h-full -z-10"
              alt="gallery"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
