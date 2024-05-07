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
    eligibility: "Sea Uman Holders",
    image: "/partners/uman/seauman.png",
    specs: "",
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
    title: "NEEDLE & CHAIN",
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

export const MOCKUP_PARTNERS: Partner[] = [
  {
    title: "Shadow Dex",
    description: `
        <div>
        TEES_ is the Official apparel partner of Shadow Dex, a fantom-native concentrated liquidity exchange coming to Fantom in 2024. Refer to the medium article below to learn more about 
        </div>
        <a href="https://medium.com/@Shadow_Exchange/shadow-exchange-launching-on-fantom-sonic-1ba13c2c9830" target="_blank">Shadow Dex</a>
        `,
    images: [
      "/partners/shadowdex/1.png",
      "/partners/shadowdex/2.png",
      "/partners/shadowdex/3.png",
    ],
    link: "shadowdex",
    partnerImage: "/partners/shadowdex.png",
    website: "https://shadowdex.fi/",
  },

  {
    title: "Sui Generis",
    description:
      "Sui Generis is the re-brand 2.0 of the famous fantom Tombheads Auction House that promoted more than 200 Artists on-chain!",
    images: [
      "/partners/sui/1.png",
      "/partners/sui/2.png",
      "/partners/sui/3.png",
    ],
    link: "generis",
    partnerImage: "/partners/generis.png",
    website: "https://suigeneris.auction/",
  },
  {
    title: "Uman",
    description: `
        <div>
        Uman is an Ecuadorian artist and creator of the World of Umans. She studied design at Parsons School of Design in New York City and has created multiple collections on Ethereum and Fantom. She has received accolates including 2021 Artist of the Year and Collection of the Year at the Fantom Developer Conference was recognized at NFT NYC in 2021 as a "Best NFT Artist" nominee and "Best NFT Emerging Artist", having her piece, “I am Uman”, displayed in Times Square. Her collections are among the most highest-volume collections to date on the Fantom blockchain.
        </div>
        <div>
        OfficialNFTees had the pleasure of collaborating with Uman on an 11-piece sub-collection of the original Royal Tees collection, which featured the Uman Jacket, a hand-painted physical NFTee replica painted on a Yves Saint Laurent jean jacket. See her website below for links to all of her outstanding collections.
        </div>
        `,
    images: [
      "/partners/uman/1.png",
      "/partners/uman/2.png",
      "/partners/uman/3.png",
    ],
    link: "uman",
    partnerImage: "/partners/uman.png",
    website: "https://worldofumans.com/home",
  },
  {
    title: "Clokkworky",
    description: `
        <div>
        Clokkworky is an artist who describes his style as, “Psychedelic Cubism - Abstract Art - Psychedelic Art & Pepedelic Cryptocubism.” His unique ability, skill and appeal to crypto space have resulted in some of the highest single-piece sales on Fantom blockchain NFT auctions to date.
        </div>
        <div>
        OfficialNFTees has partnered with Clokkworky on vibrant, three piece collection that brought his artistic genius to the forefront of the Royal Tees collection. Clokkworky has also created a three-piece collection of “Crypto Deities” named by the cross-section of OfficialNFTees/Clokkworky community-members. Limited release of these designs are planned with a TBD drop date.
        </div>
        `,
    images: [
      "/partners/clokkworky/1.png",
      "/partners/clokkworky/2.png",
      "/partners/clokkworky/3.png",
    ],
    link: "clokkworky",
    partnerImage: "/partners/clokkworky.png",
    website: "https://linktr.ee/clokkworky",
  },
  {
    title: "FantomPunks",
    description: `
        <div>
        Sarge is one of the pioneers of the Fantom NFT scene, whose 100-piece collection of FantomPunks has been among the most popular on Fantom since launching in early 2021. Since then, Sarge has contributed much to the community through free mints, airdrops to existing FantomPunks Holders, and his “SWOL” art collaborations with NFT Incubator Potluck Labs.
        </div>
        <div>
        FantomPunks, in combination with Gotham Apes, also hosted a first-of-its-kind in-person NFT Auction in Austin, TX during SXSW in March of 2021.
        </div>
        <div>
        TEES and FantomPunks made one of the first multi-NFT collaborations on the Fantom blockchain as part of the FantomPunks and Royal Tees collections.
        </div>
        `,
    images: [
      "/partners/fantompunks/1.png",
      "/partners/fantompunks/2.png",
      "/partners/fantompunks/3.png",
    ],
    link: "fantompunks",
    partnerImage: "/partners/fantompunks/4.png",
    website: "https://twitter.com/FantomPunks",
  },
  {
    title: "NFTier",
    description: `
        <div>
        NFTier is a one-of-a-kind launchpad and NFT analytics dapp built on Hedera, featuring all of the biggest NFT drops on the hashgraph. NFTier also provides exclusive access to customizable NFT market Advanced Analytics and Rarity Analytics, giving traders and holders valuable insights into the market as well as their own portfolios.
        </div>
        <div>
        As part of our partnership that began in 2022, NFTier created a seamless ordering process for physical apparel NFTs (also known as Phygitals) that ensures two key functions; 1) each physical item can only be ordered once, protecting exclusivity and supply, and 2) each item is securely paired with a specific NFT, protecting ownership of the Phygital.
        </div>
        <div>
        We look forward to bringing many more digital fashion drops to Hedera in partnership with NFTier.
        </div>
        `,
    images: [
      "/partners/nftier/1.gif",
      "/partners/nftier/2.png",
      "/partners/nftier/3.gif",
    ],
    link: "nftier",
    partnerImage: "/partners/nftier/2.png",
    website: "https://tier.bot",
  },
];

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
  },
  ...MOCKUP_CLAIMS.map((claim) => claim.contract),
];
