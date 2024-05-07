import { Button } from "@/components/button";
import { Partner } from "@/types/partner";

export const PartnersPartner = ({ partner }: { partner: Partner }) => (
  <div className="flex flex-col gap-10 items-center justify-center">
    <div className="text-center text-6xl w-full">{partner.title}</div>
    <img
      className="object-cover max-w-[340px] w-full h-full rounded-lg"
      src={partner.partnerImage}
      alt={partner.title}
    />
    
    <div
      className="text-center text-2xl w-full text-balance"
      dangerouslySetInnerHTML={{
        __html: partner.description,
      }}
    ></div>
    <a target="_blank" href={partner.website}>
      <Button className="text-3xl">[GO TO WEBSITE]</Button>
    </a>
    <div className="flex flex-row gap-5 flex-wrap h-full items-center">
      {partner.images.map((image, key) => (
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "340px",
            height: "340px",
            borderRadius: "10px",
          }}
          key={key}
        ></div>
      ))}
    </div>
  </div>
);
