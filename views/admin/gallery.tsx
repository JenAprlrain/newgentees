import { MOCKUP_GALLERY } from "@/constants/mockup";
import AuthProvider, { useAuth } from "@/context/AuthContext";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  createGalleryImage,
  getGalleryImages,
  updateGalleryImage,
} from "@/api/gallery";
import { NormalizedGallery } from "@/types/gallery";
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

  const onDeleteClick = (index: number) => {
    const newGallery = [...gallery];
    newGallery.splice(index, 1);
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

  const uploadInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getGalleryImages()
      .then((res) => res.json())
      .then((images) => {
        const normalizedGallery = images.map((gallery: any) => {
          return {
            image: {
              id: gallery.image[0].id,
              image: gallery.image[0].image,
            },
            id: gallery.id,
            index: gallery.index,
            alreadyUploaded: true,
          };
        });

        // @ts-expect-error
        setGallery(normalizedGallery.sort((a, b) => a.index - b.index));
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
      {/* Instagram like gallery, 3 photos in one row all the time, 1:1 */}
      <div className="grid grid-cols-3 gap-1">
        <div
          role="button"
          onClick={() => uploadInputRef.current?.click()}
          className="h-40 md:h-80 w-full bg-gray-200 flex items-center justify-center"
        >
          {/* Upload image */}
          <input
            type="file"
            onChange={onUpload}
            className="text-3xl text-black hidden"
            id="upload"
            ref={uploadInputRef}
          />
          <button className="text-3xl text-black">[UPLOAD]</button>
        </div>
        {gallery.map((photo, index) => (
          <div
            // @ts-expect-error
            key={photo.image.image + index}
            className="h-40 md:h-80 w-full bg-gray-200 flex items-center justify-center"
          >
            <div
              style={{ backgroundImage: `url(${photo.image.image})` }}
              className="h-40 md:h-80 w-full bg-cover bg-center bg-no-repeat flex justify-start items-end"
            >
              {/* Rearrange and delete buttons */}
              <div className="flex flex-row gap-1">
                {index !== 0 && (
                  <button
                    onClick={() => onLeftArrowClick(index)}
                    className="text-3xl text-black bg-gray-200"
                  >
                    {"[<]"}
                  </button>
                )}
                {index !== gallery.length - 1 && (
                  <button
                    onClick={() => onRightArrowClick(index)}
                    className="text-3xl text-black bg-gray-200"
                  >
                    {"[>]"}
                  </button>
                )}
                <button
                  onClick={() => onDeleteClick(index)}
                  className="text-3xl text-black bg-gray-200"
                >
                  [DELETE]
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
