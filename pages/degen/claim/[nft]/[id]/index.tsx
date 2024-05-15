import { getClaim } from "@/api/claim";
import { Claim } from "@/types/claim";
import { ClaimSwagForm } from "@/views/claim/form";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function Page() {
  const [claim, setClaim] = useState<Claim | null>(null);
  const router = useRouter();
  const { nft, id } = router.query as { nft: string; id: string };

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
  }, [nft, id, router]);

  if (!claim) return null;

  return <ClaimSwagForm claim={claim} id={id} />;
}
