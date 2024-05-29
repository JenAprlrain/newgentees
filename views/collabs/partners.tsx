import { getPartners } from "@/api/partner";
import { Partner } from "@/types/partner";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Partners = () => {
  const [partners, setPartners] = useState<Partner[]>([]);
  useEffect(() => {
    getPartners().then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setPartners(data);
        });
      }
    });
  }, []);

  return (
    <div className="flex flex-col gap-10 md:gap-20 w-full">
      <div className="text-3xl md:text-start text-center">
        PAST AND CURRENT PARTNERSHIPS
      </div>
      {/* Instagram like gallery, 3 photos in one row all the time, 1:1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {partners.map((partner, index) => (
          <Link
            href={`/collabs/partner/${partner.link}`}
            key={index}
            className="flex flex-col gap-2 transition-all duration-500 ease-in-out relative z-10"
          >
            <div>{partner.title}</div>
            {/* make images square */}
            <div className="relative w-full" style={{ paddingBottom: "100%" }}>
              <img
                src={partner.image.find((image) => image.profile_image)?.image}
                className="absolute object-cover w-full h-full -z-10"
                alt={partner.title}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
