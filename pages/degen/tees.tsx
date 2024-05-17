import { getHouseCollections } from "@/api/house-collection";
import { HouseCollectionType } from "@/types/house-collections";
import { Tees } from "@/views/tees";
import { useState, useEffect } from "react";

export default function Page() {
  const [HouseCollectionsData, setHouseCollectionsData] = useState<
    HouseCollectionType[]
  >([]);

  useEffect(() => {
    getHouseCollections()
      .then((data) => data.json())
      .then((data) => setHouseCollectionsData(data));
  }, []);

  return <Tees housecollections={HouseCollectionsData} />;
}
