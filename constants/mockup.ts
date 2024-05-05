import { CommuniTeesABI, LifeStyleABI, RoyalTeesABI } from "@/contracts/fantom";
import { Claim } from "@/types/claim";
import { HouseCollectionsType } from "@/types/house-collections";
import { Partner } from "@/types/partner";
import { TeesContract } from "@/types/tees";

export const MOCKUP_CLAIMS: Claim[] = [
    {
        open: "World Of Umans - Sea Umans",
        care: "",
        chart: "",
        eligibility: "",
        image: "",
        specs: "",
        successful: "",
        title: "",
        link: "seaumans",
        contract: {
            type: "SUI",
            objectType: "SeaUmans",
            name: "World Of Umans - Sea Umans",
        }
    }
]

export const MOCKUP_GALLERY = [
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0681.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0637.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0681.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0637.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0681.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0637.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
    "https://nextjsconf-pics.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fzeit-inc%2Fimage%2Fupload%2Fc_scale%2Cw_720%2Fnextconf-photos%2FSexton_Vercel_0631.jpg&w=640&q=75",
];

export const MOCKUP_HOUSE_COLLECTION: HouseCollectionsType[] = [
    {
        title: "NEEDLE & CHAIN",
        image: "https://media.discordapp.net/attachments/1230179117899583559/1234532228122415166/kedimeme.png?ex=6638537b&is=663701fb&hm=14287830de77c27a387ab9de8b412a0ead49f46484d503e14290f076a105d3f6&=&format=webp&quality=lossless&width=354&height=350",
        description: "",
        images: [],
        link: "i dont fucknig remember",
        type: "upcoming"
    },
    {
        title: "ROYALTEES",
        image: "https://media.discordapp.net/attachments/1230179117899583559/1234532228122415166/kedimeme.png?ex=6638537b&is=663701fb&hm=14287830de77c27a387ab9de8b412a0ead49f46484d503e14290f076a105d3f6&=&format=webp&quality=lossless&width=354&height=350",
        description: "",
        images: [],
        link: "",
        type: "current"
    },
    {
        title: "LIFESTYLE",
        image: "https://media.discordapp.net/attachments/1230179117899583559/1234532228122415166/kedimeme.png?ex=6638537b&is=663701fb&hm=14287830de77c27a387ab9de8b412a0ead49f46484d503e14290f076a105d3f6&=&format=webp&quality=lossless&width=354&height=350",
        description: "",
        images: [],
        link: "",
        type: "current"
    },
    {
        title: "COMMUNITEES",
        image: "https://media.discordapp.net/attachments/1230179117899583559/1234532228122415166/kedimeme.png?ex=6638537b&is=663701fb&hm=14287830de77c27a387ab9de8b412a0ead49f46484d503e14290f076a105d3f6&=&format=webp&quality=lossless&width=354&height=350",
        description: "",
        images: [],
        link: "",
        type: "past"
    }
]

export const MOCKUP_CLAIM: Claim = {
    care: `
    <div>Wash Cold</div>
    <div>Hang Dry</div>
    `,
    specs: `
    <div>Garment: Hoodie (Black)</div>
    <div>Fabric: 75% Cotton / 25% Poly</div>
    <div>Weight: 330 GSM</div>
    `,
    eligibility: "Galaxy25 Holders",
    chart: "fdhfdgjhfgsjh",
    image: "https://www.officialnftees.com/assets/hat2-BiHKbeXj.png",
    link: "galaxy-25",
    open: "Galaxy 25 by Zvo",
    title: "Galaxy25 by zvonarka",
    successful: "wowwww",
    contract: {
        type: "SUI",
        objectType: "Galaxy25",
        name: "Galaxy25 by zvonarka",
    }
}

export const MOCKUP_PARTNERS: Partner[] = [
    {
        title: "Shadow Dex",
        description: "A Fantom-native concentrated liquidity exchange.",
        images: ["/partners/shadowdex/1.png", "/partners/shadowdex/2.png", "/partners/shadowdex/3.png"],
        link: "shadowdex",
        partnerImage: "/partners/shadowdex.png",
        website: "https://shadowdex.fi/"
    },

    {
        title: "Sui Generis",
        description: "Sui Generis is the re-brand 2.0 of the famous fantom Tombheads Auction House that promoted more than 200 Artists on-chain!",
        images: ["/partners/sui/1.png", "/partners/sui/2.png", "/partners/sui/3.png"],
        link: "generis",
        partnerImage: "/partners/generis.png",
        website: "https://suigeneris.auction/"
    },
    {
        title: "Uman",
        description: `Uman is an Ecuadorian artist and creator of the World of Umans. She studied design at Parsons School of Design in New York City and has created multiple collections on Ethereum and Fantom. She has received accolates including 2021 Artist of the Year and Collection of the Year at the Fantom Developer Conference was recognized at NFT NYC in 2021 as a "Best NFT Artist" nominee and "Best NFT Emerging Artist", having her piece, “I am Uman”, displayed in Times Square. Her collections are among the most highest-volume collections to date on the Fantom blockchain.`,
        images: ["/partners/uman/1.png", "/partners/uman/2.png", "/partners/uman/3.png"],
        link: "uman",
        partnerImage: "/partners/uman.png",
        website: "https://worldofumans.com/home"
    },
    {
        title: "Clokkworky",
        description: "Clokkworky is an artist who describes his style as, “Psychedelic Cubism - Abstract Art - Psychedelic Art & Pepedelic Cryptocubism.” His unique ability, skill and appeal to crypto space have resulted in some of the highest single-piece sales on Fantom blockchain NFT auctions to date.",
        images: ["/partners/clokkworky/1.png", "/partners/clokkworky/2.png", "/partners/clokkworky/3.png"],
        link: "clokkworky",
        partnerImage: "/partners/clokkworky.png",
        website: "https://linktr.ee/clokkworky"
    },
]

export const MOCKUP_CONTRACTS: TeesContract[] = [
    {
        type: "EVM",
        abi: CommuniTeesABI,
        address: "0x633763D9174d6B772676920b2309b39eE3A92a8a",
        name: "Communitees",
    },
    {
        type: "EVM",
        abi: RoyalTeesABI,
        address: "0x903efDA32f6d85ae074c1948C8d6B54F2421949f",
        name: "Royaltees",
    },
    {
        type: "EVM",
        abi: LifeStyleABI,
        address: "0xe010Ab037418431EeB65D59aAFB5059c13e8FAc2",
        name: "Lifetyle",
    }
]