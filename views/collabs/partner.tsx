import { Button } from "@/components/button";
import { Partner } from "@/types/partner";

export const PartnersPartner = ({ partner }: { partner: Partner }) => (
  <div className="flex flex-col gap-10 items-center justify-center">
    <div className="text-center text-6xl w-full">{partner.title}</div>
    {/* make the profile image square */}
    <img
      src={partner.image.find((image) => image.profile_image)?.image}
      className="w-72 h-72 object-cover"
    />

    <div
      className="text-center text-2xl w-full text-balance flex flex-col gap-5"
      dangerouslySetInnerHTML={{
        __html: partner.description,
      }}
    ></div>
    <a target="_blank" href={partner.website}>
      <Button className="text-3xl">[GO TO WEBSITE]</Button>
    </a>
    <div className="flex flex-row gap-5 flex-wrap h-full items-center">
      {partner.image
        .filter((image) => !image.profile_image)
        .map((image, key) => (
          <div
            style={{
              backgroundImage: `url(${image.image})`,
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
