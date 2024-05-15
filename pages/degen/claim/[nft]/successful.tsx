import { getClaim } from "@/api/claim";
import { Claim } from "@/types/claim";
import { ClaimSwagSuccessful } from "@/views/claim/successful";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [claim, setClaim] = useState<Claim | null>(null);
  const router = useRouter();
  const { nft } = router.query as { nft: string; id: string };

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

  return <ClaimSwagSuccessful claim={claim} />;
}
