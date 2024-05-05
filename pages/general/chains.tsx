import { SuiLogo, FantomLogo, HederaLogo } from "@/components/logos";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <div className="font-bold text-xl">Chains</div>
      <div>
        OfficialNFTees is proud to be a multi-chain platform. We currently offer
        NFTees on the following blockchains:
      </div>
      <div className="flex flex-row flex-wrap gap-5 items-center">
        <SuiLogo className="w-28" />
        <FantomLogo className="w-40" />
        <HederaLogo className="w-40" />
      </div>
    </div>
  );
}
