import { SuiLogo, FantomLogo, HederaLogo } from "@/components/logos";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <div className="font-bold text-xl">Chains</div>
      <div>
        OfficialNFTees is proud to be a multi-chain platform. We currently offer
        NFTees on the following blockchains:
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 justify-center items-center">
        <SuiLogo className="w-28 h-14" />
        <FantomLogo className="w-40" />
        <HederaLogo className="w-40" />
      </div>
    </div>
  );
}
