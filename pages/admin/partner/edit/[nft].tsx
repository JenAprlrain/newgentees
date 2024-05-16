import { getClaim } from "@/api/claim";
import { getHouseCollection } from "@/api/house-collection";
import { getPartner } from "@/api/partner";
import AuthProvider from "@/context/AuthContext";
import { Claim } from "@/types/claim";
import { HouseCollectionType } from "@/types/house-collections";
import { Partner } from "@/types/partner";
import { EditCollection } from "@/views/admin/collection/edit";
import { EditHouseCollection } from "@/views/admin/house-collection/edit";
import { EditPartner } from "@/views/admin/partner/edit";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Page() {
  const [claim, setClaim] = useState<Partner | null>(null);
  const router = useRouter();
  const { nft } = router.query as { nft: string };

  useEffect(() => {
    if (!router.isReady) return;

    if (nft) {
      getPartner(nft).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setClaim(data);
          });
        } else {
          router.push("/degen/claims");
        }
      });
    } else {
      router.push("/degen/claims");
    }
  }, [nft, router]);

  if (!claim) return null;

  return (
    <AuthProvider>
      <EditPartner partner={claim} />
    </AuthProvider>
  );
}
