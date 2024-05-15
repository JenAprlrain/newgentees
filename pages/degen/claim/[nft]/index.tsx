import { getClaim } from "@/api/claim";
import { Claim } from "@/types/claim";
import { ClaimSwag } from "@/views/claim";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Page() {
  const [claim, setClaim] = useState<Claim | null>(null);
  const router = useRouter();
  const { nft } = router.query as { nft: string };

  useEffect(() => {
    if (!router.isReady) return;

    if (nft) {
      getClaim(nft).then((res) => {
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

  return <ClaimSwag claim={claim} />;
}
