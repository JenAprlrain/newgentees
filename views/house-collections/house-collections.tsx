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
          <div
            style={{
              backgroundImage: `url(${image.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "340px",
              height: "340px",
              borderRadius: "10px",
            }}
            key={key}
          ></div>
        ))}
    </div>
  </div>
);
