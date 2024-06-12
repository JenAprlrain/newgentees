import { getGalleryImages } from "@/api/gallery";
import { GalleryType } from "@/types/gallery";
import { useEffect, useState } from "react";

/*
James – Team Lead
https://twitter.com/0xJMONEY
Jen – Developer
https://twitter.com/Jen_aprilrain
Fesal – Lead Developer
https://twitter.com/iamknownasfesal
RithmiaAlgo – Marketing Lead
https://twitter.com/RithmiaAlgo
Repeatr – Design Lead
https://twitter.com/REPEATR888
Sellek - Design Lead


Please leave Zan on for now as MV/Strategy lead

*/

type TeamMember = {
  name: string;
  role: string;
  twitter?: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "James",
    role: "Team Lead",
    twitter: "https://twitter.com/0xJMONEY",
    image:"/team/JMONEY Jersey.png",
  },
  {
    name: "Jen",
    role: "Developer",
    twitter: "https://twitter.com/Jen_aprilrain",
    image:"/team/JEN Jersey.png",
  },
  {
    name: "Fesal",
    role: "Lead Developer",
    twitter: "https://twitter.com/iamknownasfesal",
    image:"/team/FESAL Jersey.png",
  },
  {
    name: "RithmiaAlgo",
    role: "Marketing Lead",
    twitter: "https://twitter.com/RithmiaAlgo",
    image:"/team/ALGO Jersey.png",
  },
  {
    name:"Sellek X",
    role:"",
    twitter:"https://x.com/SellekArt",
    image:"",
  },
  {
    name: "Sellek",
    role: "Design Lead",
    image:"/team/SELLEK Jersey.png",
  },
  {
    name: "Zan",
    role: "MV/Strategy Lead",
    image:"/team/ZAN Jersey.png",
  },
];

export const Team = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-3xl">Team</div>
      <div className="grid items-center justify-center grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <div className="relative w-64 h-64">
              <img
                src={member.image || "/house-collections/communitees/3.png"}
                className="object-cover w-full h-full"
                alt="team member"
              />
            </div>
            <div className="text-xl">{member.name}</div>
            <div className="text-sm">{member.role}</div>
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-blue-500"
              >
                {member.twitter.split("/").pop()}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
