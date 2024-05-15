import { Button } from "@/components/button";
import { Claim } from "@/types/claim";
import Link from "next/link";

export const ClaimSwagSuccessful = ({ claim }: { claim: Claim }) => (
  <div className="text-3xl leading-8 flex flex-col gap-6">
    <div>{claim.succesful}</div>
    <div>CONGRATS, LEGEND.</div>
    <div>QUALITY TAKES TIME.</div>
    <div>YOU&apos;LL RECEIVE AN EMAIL WHEN YOUR ORDER SHIPS</div>
    <div>
      EXPECTED DELIVERY BY{" "}
      {new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })}
    </div>
    <div>
      <Link href="/degen/claims">
        <Button>[BACK TO HOME]</Button>
      </Link>
    </div>
  </div>
);
