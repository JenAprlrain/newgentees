import { MOCKUP_CLAIMS } from "@/constants/mockup";
import { ClaimSwag } from "@/views/claim";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Page() {
  const router = useRouter();
  const { nft } = router.query as { nft: string };
  const MOCKUP_CLAIM = useMemo(
    () => MOCKUP_CLAIMS.find((claim) => claim.link === nft),
    [nft]
  );

  if (!MOCKUP_CLAIM) {
    return null;
  }

  return <ClaimSwag claim={MOCKUP_CLAIM} />;
}
