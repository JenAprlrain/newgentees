import { Button } from "@/components/button";
import { Claim } from "@/types/claim";

export const ClaimSwagSuccessful = ({ claim }: { claim: Claim }) => (
  <div className="text-3xl leading-8 flex flex-col gap-6">
    <div>{claim.successful}</div>
    <div>CONGRATS, LEGEND.</div>
    <div>QUALITY TAKES TIME.</div>
    <div>YOU&apos;LL RECEIVE AN EMAIL WHEN YOUR ORDER SHIPS</div>
    <div>EXPECTED DELIVERY BY XX/XX/XXXX</div>
    <div>
      <Button>[BACK TO HOME]</Button>
    </div>
  </div>
);
