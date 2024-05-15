import { useAuth } from "@/context/AuthContext";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  createGalleryImage,
  getGalleryImages,
  updateGalleryImage,
  deleteGalleryImage,
} from "@/api/gallery";
import { GalleryType, NormalizedGallery } from "@/types/gallery";
import { normalizeImage } from "@/api";

type GalleryImage = {
  index: number;
  image: string;
  alreadyUploaded: boolean;
};

export function Gallery() {
  const { token } = useAuth();
  const [gallery, setGallery] = useState<
    (NormalizedGallery & {
      alreadyUploaded: boolean;
      file?: File;
    })[]
  >([]);

  const onLeftArrowClick = (index: number) => {
    const newGallery = [...gallery];
    const temp = newGallery[index];
    newGallery[index] = newGallery[index - 1];
    newGallery[index - 1] = temp;
    setGallery(newGallery);
  };

  const onRightArrowClick = (index: number) => {
    const newGallery = [...gallery];
    const temp = newGallery[index];
    newGallery[index] = newGallery[index + 1];
    newGallery[index + 1] = temp;
    setGallery(newGallery);
  };

  const onSaveClick = async () => {
    // Update gallery state
    const newGallery = [...gallery];

    // change index of images
    let changedGallery = newGallery.map((image, index) => ({
      ...image,
      index,
    }));

    await Promise.all(
      changedGallery.map(async (image) => {
        if (image.alreadyUploaded) {
          await updateGalleryImage(image.id, image.index, token);
        } else {
          await createGalleryImage(
            // @ts-expect-error
            await normalizeImage(image.image.file),
            image.index,
            token
          );
        }
      })
    );

    changedGallery = changedGallery.map((image) => ({
      ...image,
      alreadyUploaded: true,
    }));

    setGallery(changedGallery);

    // Show success message
    toast.success("Gallery saved successfully");
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const newImages = Array.from(files).map((file, index) => ({
        id: "",
        index: index,
        image: {
          id: "",
          image: URL.createObjectURL(file),
          file,
        },
        alreadyUploaded: false,
      }));

      let _gallery = [...newImages, ...gallery].map((image, index) => ({
        ...image,
        index,
      }));

      setGallery(_gallery);
    }
  };

  const onDeleteClick = async (index: number) => {
    const newGallery = [...gallery];
    const image = newGallery[index];
    newGallery.splice(index, 1);
    setGallery(newGallery);

    if (image.alreadyUploaded) {
      await deleteGalleryImage(image.id, token);
    }
  };

  const uploadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getGalleryImages()
      .then((res) => res.json())
      .then((images: GalleryType[]) => {
        const normalizedImages = images.map((image) => ({
          id: image.id,
          index: image.index,
          image: {
            id: image.image.id,
            image: image.image.image,
          },
          alreadyUploaded: true,
        }));

        setGallery(normalizedImages.sort((a, b) => a.index - b.index));
      })
      .catch(() => toast.error("Failed to fetch gallery images"));
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="text-3xl">Gallery</div>
        <button onClick={onSaveClick} className="text-3xl">
          [SAVE]
        </button>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {/* Upload button */}
        <div
          onClick={() => uploadInputRef.current?.click()}
          className="relative w-full cursor-pointer"
          style={{ paddingBottom: "100%" }}
        >
          <input
            ref={uploadInputRef}
            type="file"
            className="hidden"
            onChange={onUpload}
            multiple
          />
          <div className="absolute w-full h-full bg-gray-200 flex justify-center items-center">
            <div className="text-3xl text-black">[UPLOAD]</div>
          </div>
        </div>
        {gallery.map((photo, index) => (
          <div
            // @ts-expect-error
            key={photo.image.image + index}
            className="relative w-full"
            style={{ paddingBottom: "100%" }}
          >
            <img
              src={photo.image.image}
              className="absolute object-cover w-full h-full -z-10"
              alt="gallery"
            />
            <div className="flex flex-row gap-1 absolute bottom-0">
              {index !== 0 && (
                <button
                  onClick={() => onLeftArrowClick(index)}
                  className="text-sm md:text-3xl text-black bg-gray-200"
                >
                  {"[<]"}
                </button>
              )}
              {index !== gallery.length - 1 && (
                <button
                  onClick={() => onRightArrowClick(index)}
                  className="text-sm md:text-3xl text-black bg-gray-200"
                >
                  {"[>]"}
                </button>
              )}
              <button
                onClick={() => onDeleteClick(index)}
                className="text-sm md:text-3xl text-black bg-gray-200"
              >
                [DELETE]
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
            
*/
