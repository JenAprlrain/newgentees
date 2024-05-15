import { PartnersPartner } from "@/views/collabs/partner";
import { getPartner } from "@/api/partner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Partner } from "@/types/partner";
import toast from "react-hot-toast";

export default function Page() {
  const router = useRouter();
  const { partnerName } = router.query;
  const [partner, setPartner] = useState<Partner | null>(null);

  useEffect(() => {
    if (!router.isReady) return;
    if (partnerName) {
      getPartner(partnerName as string).then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setPartner(data);
          });
        } else {
          toast.error("Failed to fetch partner");
          router.push("/collabs/partners");
        }
      });
    }
  }, [partnerName, router]);

  if (!partner) return null;

  return <PartnersPartner partner={partner} />;
}
