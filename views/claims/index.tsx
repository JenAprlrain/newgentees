import { getClaims } from "@/api/claim";
import { Link } from "@/components/link";
import { Claim } from "@/types/claim";
import { useEffect, useState } from "react";

export const Claims = () => {
  const [claims, setClaims] = useState<Claim[]>([]);

  useEffect(() => {
    getClaims().then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setClaims(data);
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col text-xl md:text-3xl">
      <div>Open Claims </div>
      {claims.map((claim, index) => (
        <div key={index} className="flex flex-col gap-4">
          <Link href={`/degen/claim/${claim.link}`}>{claim.open}</Link>
        </div>
      ))}
    </div>
  );
};
