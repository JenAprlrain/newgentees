import { MOCKUP_CLAIMS } from "@/constants/mockup";
import { ClaimSwagSuccessful } from "@/views/claim/successful";
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

  return <ClaimSwagSuccessful claim={MOCKUP_CLAIM} />;
}
