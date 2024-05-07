import { Button } from "@/components/button";
import { HouseCollectionsType } from "@/types/house-collections";

export const HouseCollections = ({ house }: { house: HouseCollectionsType }) => (
  <div className="flex flex-col gap-10 items-center justify-center">
    <div className="text-center text-6xl w-full">{house.title}</div>
    <div
      className="text-center text-2xl w-full text-balance"
      dangerouslySetInnerHTML={{
        __html: house.description,
      }}
    ></div>
    <a target="_blank" href={house.url}>
      <Button className="text-3xl">[GO TO WEBSITE]</Button>
    </a>
    <div className="flex flex-row gap-5 flex-wrap h-full items-center">
      {house.images.map((image, key) => (
        <div
          style={{
            backgroundImage: `url(${image})`,
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