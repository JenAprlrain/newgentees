import { MOCKUP_GALLERY } from "@/constants/mockup";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

type GalleryImage = {
  index: number;
  image: string;
  alreadyUploaded: boolean;
};

export default function Gallery() {
  const [gallery, setGallery] = useState<GalleryImage[]>([
    ...MOCKUP_GALLERY.map((image, index) => ({
      index,
      image,
      alreadyUploaded: true,
    })),
  ]);

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

  const onSaveClick = () => {
    const newImages = gallery.filter((image) => !image.alreadyUploaded);

    // Upload newImages to server
    // ...

    // Update gallery state
    const newGallery = [...gallery];
    newImages.forEach((image) => {
      newGallery[image.index].alreadyUploaded = true;
    });

    // change index of images
    newGallery.forEach((image, index) => {
      image.index = index;
    });

    // Update gallery in Server
    // ...

    setGallery(newGallery);

    // Show success message
    toast.success("Gallery saved successfully");
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => ({
        index: index,
        image: URL.createObjectURL(file),
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

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex flex-row justify-between">
        <div className="text-3xl">Gallery</div>
        <button className="text-3xl">[SAVE]</button>
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
            key={photo.image + index}
            className="h-40 md:h-80 w-full bg-gray-200 flex items-center justify-center"
          >
            <div
              style={{ backgroundImage: `url(${photo.image})` }}
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
