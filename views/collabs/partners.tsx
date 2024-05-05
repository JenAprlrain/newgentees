import { MOCKUP_PARTNERS } from "@/constants/mockup";
import Link from "next/link";

export const Partners = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-20 w-full">
      <div className="text-3xl md:text-start text-center">
        PAST AND CURRENT PARTNERSHIPS
      </div>
      {/* Instagram like gallery, 3 photos in one row all the time, 1:1 */}
      <div className="flex flex-wrap md:justify-between justify-center flex-row text-xl gap-5">
        {MOCKUP_PARTNERS.map((partner, index) => (
          <Link
            href={`/collabs/partner/${partner.link}`}
            key={index}
            className="flex flex-col gap-2 transition-all duration-500 ease-in-out"
          >
            <div>{partner.title}</div>
            <div className="h-40 md:h-80 bg-gray-200 flex items-center justify-center">
              <img
                src={partner.partnerImage}
                alt={partner.title}
                className="h-40 md:h-80 w-full object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
