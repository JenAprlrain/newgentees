import { Button } from "@/components/button";
import { HouseCollectionType } from "@/types/house-collections";

export const HouseCollections = ({ house }: { house: HouseCollectionType }) => (
  <div className="flex flex-col gap-10 items-center justify-center">
    <div className="text-center text-6xl w-full">{house.title}</div>
    <div
      className="text-center text-2xl w-full text-balance"
      dangerouslySetInnerHTML={{
        __html: house.description,
      }}
    ></div>
    <a target="_blank" href={house.website}>
      <Button className="text-3xl">[GO TO WEBSITE]</Button>
    </a>
    <div className="flex flex-row gap-5 flex-wrap h-full items-center">
      {house.image
        .filter((image) => !image.profile_image)
        .map((image, key) => (
          <img
            key={key}
            src={image.image}
            className={
              house.image.filter((img) => !img.profile_image).length === 1
                ? "w-full h-auto"
                : "w-1/3 h-auto"
            }
            alt={house.title}
          />
        ))}
    </div>
  </div>
);
