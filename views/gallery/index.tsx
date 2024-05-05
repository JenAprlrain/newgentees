import { MOCKUP_GALLERY } from "@/constants/mockup";

export const Gallery = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-3xl">Gallery</div>
      {/* Instagram like gallery, 3 photos in one row all the time, 1:1 */}
      <div className="grid grid-cols-3 gap-1">
        {MOCKUP_GALLERY.map((photo, index) => (
          <div
            key={index}
            className="h-40 md:h-80 w-full bg-gray-200 flex items-center justify-center"
          >
            <img
              src={photo}
              alt="gallery"
              className="h-40 md:h-80 w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
