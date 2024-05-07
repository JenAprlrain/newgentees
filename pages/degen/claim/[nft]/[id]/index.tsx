import { MOCKUP_CLAIMS } from "@/constants/mockup";
import { ClaimSwagForm } from "@/views/claim/form";
import { useRouter } from "next/router";
import { useMemo } from "react";

export default function Page() {
  const router = useRouter();
  const { nft, id } = router.query as { nft: string; id: string };
  const MOCKUP_CLAIM = useMemo(
    () => MOCKUP_CLAIMS.find((claim) => claim.link === nft),
    [nft]
  );

  if (!MOCKUP_CLAIM) {
    return null;
  }

  return <ClaimSwagForm claim={MOCKUP_CLAIM} id={id} />;
}
