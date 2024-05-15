import { CommuniTeesABI, LifeStyleABI, RoyalTeesABI } from "@/contracts/fantom";
import { Claim } from "@/types/claim";
import { HouseCollectionsType } from "@/types/house-collections";
import { Partner } from "@/types/partner";
import { TeesContract } from "@/types/tees";

export const MOCKUP_CLAIMS: Claim[] = [
  {
    open: "World Of Umans - Sea Umans",
    care: `
    <div>Wash: Cold</div>
    <div>Dry: Hang Dry Only</div>
    `,
    chart: "",
    eligibility: "Sea Uman Holders",
    image: "/partners/uman/seauman.png",
    specs: `
    <div>GARMENT: Tee</div>
    <div>FABRIC: 100% Dyed Cotton Tee</div>
    <div>WEIGHT: 225 GSM</div>
    `,
    successful: "You got a sea uman tshirt!",
    title: "Sea Umans",
    link: "seaumans",
    contract: {
      type: "SUI",
      objectType:
        "0x4dea41637502f0668e651e676307fae5b0a0affdd95c56cc6e8dfce123db8d12::sea_uman_nft::SeaUmanNFT",
      name: "seaumans",
    },
  },
];

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
    title: ">NEEDLE & CHAIN",
    image: "/house-collections/needlechain/needlechain.png",
    description:
      "Needle & Chain provides NFTees as a service for a procured collection of partners to provide their communities a full service phygital experience. We provide packages that meet all your needs and secure premium quality merch to the blockchain.",
    images: ["/house-collections/needlechain/needlechain.png"],
    link: "https://docs.google.com/forms/d/e/1FAIpQLSckFgwxgNTnYtgyL-rD8q1MoQGMjXj_sYH1BtFMkfDUaNebeQ/viewform",
    type: "upcoming",
    url: "needle-and-chain",
  },
  {
    title: "ROYALTEES",
    image: "/house-collections/royaltees/royaltees.png",
    description:
      "Our Genesis 100 OG NFTee Collection was our first, launching on ZooCoin NFT Marketplace in April of 2021, and subsequently migrating to Paintswap. These NFTees are focused on celebrating the Fantom Ecosystem. Each holder earns royalties earned by the contract from primary and secondary sales, and subsequent collections will also funnel royaltees to holders of these 100 NFTees.",
    images: [
      "/house-collections/royaltees/1.gif",
      "/house-collections/royaltees/2.gif",
      "/house-collections/royaltees/3.gif",
    ],
    link: "https://paintswap.finance/marketplace/fantom/collections/officialnftees",
    type: "current",
    url: "royaltees",
  },
  {
    title: "LIFESTYLE",
    image: "/house-collections/lifestyle/lifestyle.png",
    description:
      "This collection features incredibly customized and unique collaborations with artists, pushing the boundries of artistic mediums and canvases and exploring the idea of what a physical NFT can be.",
    images: [
      "/house-collections/lifestyle/1.png",
      "/house-collections/lifestyle/2.png",
      "/house-collections/lifestyle/3.png",
    ],
    link: "https://paintswap.finance/marketplace/fantom/collections/officialnftees-lifestyle-collection/nfts",
    type: "current",
    url: "lifestyle",
  },
  {
    title: "COMMUNITEES",
    image: "/house-collections/communitees/communitees.png",
    description:
      "The CommuniTee Collection pays homage to the OG 8-bit NFT projects on Fantom as well as several OG protocols and influencers within the the Fantom community. This collection recognizes that the 100 OG NFTees are not accessible to all members of the community, and seeks to grow our engagement. This contract will earn Royaltees for 100 OG NFTee holders.",
    images: [
      "/house-collections/communitees/1.png",
      "/house-collections/communitees/2.jpg",
      "/house-collections/communitees/3.png",
    ],
    link: "https://paintswap.finance/marketplace/fantom/collections/officialnftees-communitee-collection",
    type: "past",
    url: "communitees",
  },
];

export const MOCKUP_CONTRACTS: TeesContract[] = [
  {
    type: "EVM",
    abi: CommuniTeesABI,
    address: "0x633763D9174d6B772676920b2309b39eE3A92a8a",
    name: "COLLECTIONS",
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
    name: "Lifestyle",
  },
  ...MOCKUP_CLAIMS.map((claim) => claim.contract),
];
