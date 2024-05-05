import { MOCKUP_CLAIM } from "@/constants/mockup";
import { ClaimSwagForm } from "@/views/claim/form";

export default function Page() {
  return <ClaimSwagForm claim={MOCKUP_CLAIM} />;
}
