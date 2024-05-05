import { MOCKUP_CLAIM } from "@/constants/mockup";
import { ClaimSwagSuccessful } from "@/views/claim/successful";

export default function Page() {
  return <ClaimSwagSuccessful claim={MOCKUP_CLAIM} />;
}
