import { MOCKUP_PARTNERS } from "@/constants/mockup";
import { PartnersPartner } from "@/views/collabs/partner";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();
  const { partnerName } = router.query;

  useEffect(() => {
    if (partnerName) {
      const partner = MOCKUP_PARTNERS.find(
        (partner) => partner.link === partnerName
      );

      if (!partner) {
        router.push("/general/partners");
      }
    }
  }, [partnerName, router]);

  const partner = MOCKUP_PARTNERS.find(
    (partner) => partner.link === partnerName
  );

  if (!partner) {
    return (
      <div>
        <h1>Partner not found</h1>
      </div>
    );
  }

  return <PartnersPartner partner={partner} />;
}
