import { Link } from "@/components/link";

export const Landing = () => {
  return (
    <div className="flex flex-col gap-8 text-3xl">
      <div>I&apos;M A:</div>
      <Link href="/degen">DEGEN: LOOKING TO BUY/CLAIM NFT APPAREL.</Link>
      <Link href="/collabs">DEV/ARTIST: LOOKING TO COLLABORATE.</Link>
      {/* <Link href="/normie">NORMIE: JUST LET ME IN THE SITE.</Link> */}
    </div>
  );
};
