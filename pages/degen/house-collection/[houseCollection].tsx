import { MOCKUP_HOUSE_COLLECTION, MOCKUP_PARTNERS } from "@/constants/mockup";
import { HouseCollections } from "@/views/house-collections/house-collections";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { houseCollection } = router.query;

  useEffect(() => {
    if (houseCollection) {
      const house = MOCKUP_HOUSE_COLLECTION.find(
        (house) => house.url === houseCollection
      );

      if (!house) {
        router.push("/degen/house-collections");
      }
    }
  }, [houseCollection, router]);

  const house = MOCKUP_HOUSE_COLLECTION.find(
    (house) => house.url === houseCollection
  );

  if (!house) {
    return (
      <div>
        <h1>Collection not found</h1>
      </div>
    );
  }

  return <HouseCollections house={house} />;
}
