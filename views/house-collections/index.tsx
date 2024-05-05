import { MOCKUP_HOUSE_COLLECTION } from "@/constants/mockup";
import { HouseCollectionsType } from "@/types/house-collections";
import { useMemo } from "react";

export const HouseCollections = () => {
  const HouseCollectionsData: {
    upcoming: HouseCollectionsType[];
    current: HouseCollectionsType[];
    past: HouseCollectionsType[];
  } = useMemo(() => {
    const upcoming: HouseCollectionsType[] = [];
    const current: HouseCollectionsType[] = [];
    const past: HouseCollectionsType[] = [];

    MOCKUP_HOUSE_COLLECTION.forEach((item) => {
      if (item.type === "upcoming") {
        upcoming.push(item);
      } else if (item.type === "current") {
        current.push(item);
      } else {
        past.push(item);
      }
    });

    return {
      upcoming,
      current,
      past,
    };
  }, []);

  return (
    <div className="flex flex-col text-3xl gap-4 max-w-xl w-full sm:text-start text-center justify-center sm:justify-start">
      <div className="flex flex-col gap-3">
        <div>{">"}Upcoming</div>
        <div className="flex flex-wrap gap-6 sm:pl-10">
          {HouseCollectionsData.upcoming.map((item, index) => (
            <div
              className="flex flex-col gap-2 sm:w-auto w-full sm:items-start items-center"
              key={index}
            >
              <div>{item.title}</div>
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-40 object-cover bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>{">"}Current</div>
        <div className="flex flex-wrap gap-6 sm:pl-10">
          {HouseCollectionsData.current.map((item, index) => (
            <div
              className="flex flex-col gap-2 sm:w-auto w-full sm:items-start items-center"
              key={index}
            >
              <div>{item.title}</div>
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-40 object-cover bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div>{">"}Past</div>
        <div className="flex flex-wrap gap-6 sm:pl-10">
          {HouseCollectionsData.past.map((item, index) => (
            <div
              className="flex flex-col gap-2 sm:w-auto w-full sm:items-start items-center"
              key={index}
            >
              <div>{item.title}</div>
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-40 object-cover bg-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
