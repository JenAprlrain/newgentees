import { getHouseCollection } from "@/api/house-collection";
import { MOCKUP_HOUSE_COLLECTION } from "@/constants/mockup";
import { HouseCollectionType } from "@/types/house-collections";
import { HouseCollections } from "@/views/house-collections/house-collections";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const [house, setHouse] = useState<HouseCollectionType | null>(null);
  const router = useRouter();
  const { houseCollection } = router.query as { houseCollection: string };

  useEffect(() => {
    if (!router.isReady) return;

    if (houseCollection) {
      getHouseCollection(houseCollection).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setHouse(data);
          });
        } else {
          router.push("/degen/house-collections");
        }
      });
    } else {
    }
  }, [houseCollection, router]);

  if (!house) return null;

  return <HouseCollections house={house} />;
}
