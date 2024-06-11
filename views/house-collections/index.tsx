import { useEffect, useState } from "react";
import Link from "next/link";
import { getHouseCollections } from "@/api/house-collection";
import { HouseCollectionType } from "@/types/house-collections";

export const HouseCollections = () => {
  const [HouseCollectionsData, setHouseCollectionsData] = useState<
    HouseCollectionType[]
  >([]);

  useEffect(() => {
    getHouseCollections()
      .then((data) => data.json())
      .then((data) => setHouseCollectionsData(data));
  }, []);

  return (
    <div className="flex flex-col text-3xl gap-4 w-full sm:text-start justify-center sm:justify-start">
      <div>HOUSE COLLECTIONS</div>
      <div className="flex flex-row gap-20 px-20 pt-10">
      <div className="flex flex-col gap-3">
        <div className="border-b-4 border-white pb-4">Upcoming</div>
        <div className="flex flex-wrap lg:items-start lg:justify-normal gap-6 pt-6">
          {HouseCollectionsData.filter(
            (house) => house.type === "upcoming"
          ).map((house, index) => (
            <Link
              href={`/degen/house-collection/${house.link}`}
              key={index}
              className="flex flex-col gap-2 transition-all duration-500 ease-in-out"
            >
              <div
                className="flex flex-col gap-2 sm:w-auto w-full sm:items-start items-center"
                key={index}
              >
                <div className="hover:text-matrix-green transition-all duration-300">{">"}{house.title}</div>
                <img
                  src={house.image.find((img) => img.profile_image)?.image}
                  alt={house.title}
                  className="h-40 w-40 object-cover bg-gray-200"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="border-b-4 border-white pb-4">Current</div>
        <div className="flex flex-wrap lg:items-start lg:justify-normal items-center justify-center gap-6 pt-6">
          {HouseCollectionsData.filter((house) => house.type === "current").map(
            (house, index) => (
              <Link
                href={`/degen/house-collection/${house.link}`}
                key={index}
                className="flex flex-col gap-2 transition-all duration-500 ease-in-out pr-8"
              >
                <div
                  className="flex flex-col gap-2 sm:w-auto w-full sm:items-start items-center"
                  key={index}
                >
                  <div className="hover:text-matrix-green transition-all duration-300">{">"}{house.title}</div>
                  <img
                    src={house.image.find((img) => img.profile_image)?.image}
                    alt={house.title}
                    className="h-40 w-40 object-cover bg-gray-200"
                  />
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="border-b-4 border-white pb-4">Past</div>
        <div className="flex flex-wrap lg:items-start lg:justify-normal items-center justify-center gap-6 pt-6">
          {HouseCollectionsData.filter((house) => house.type === "past").map(
            (house, index) => (
              <Link
                href={`/degen/house-collection/${house.link}`}
                key={index}
                className="flex flex-col gap-2 transition-all duration-500 ease-in-out"
              >
                <div
                  className="flex flex-col gap-2 sm:w-auto w-full sm:items-start items-center"
                  key={index}
                >
                  <div className="hover:text-matrix-green transition-all duration-300">{">"}{house.title}</div>
                  <img
                    src={house.image.find((img) => img.profile_image)?.image}
                    alt={house.title}
                    className="h-40 w-40 object-cover bg-gray-200"
                  />
                </div>
              </Link>
            )
          )}
        </div>
        </div>
      </div>
    </div>
  );
};
