import { Link } from "@/components/link";
import { MOCKUP_CLAIMS } from "@/constants/mockup";

export const Claims = () => {
  return (
    <div className="flex flex-col text-xl md:text-3xl">
      <div>Open Claims </div>
      {MOCKUP_CLAIMS.map((claim, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Link href={`/degen/claim/${claim.link}`}>{claim.open}</Link>
        </div>
      ))}
    </div>
  );
};
