import { Button } from "@/components/button";
import { useNft } from "@/context/NftContext";
import { Claim } from "@/types/claim";
import { ConnectModal, useDisconnectWallet } from "@mysten/dapp-kit";
import { NftsDialog } from "./dialog-nfts";

export function ClaimSwag({ claim }: { claim: Claim }) {
  const { isSuiConnected } = useNft();
  const { mutate: disconnect } = useDisconnectWallet();

  return (
    <div className="font-normal text-3xl leading-8 text-start flex flex-col gap-10">
      <div className="text-center">{claim.title}</div>
      <div className="flex flex-col gap-5">
        <div className="justify-center items-center flex">
          <img
            src={claim.image.image}
            className="w-full h-72 object-cover"
            alt={claim.title}
          />
        </div>
        <section>
          <div>Specs:</div>
          <div
            dangerouslySetInnerHTML={{
              __html: claim.specs.replace(/\n/g, "<br>"),
            }}
          ></div>
        </section>
        <section>
          <div>Care:</div>
          <div
            dangerouslySetInnerHTML={{
              __html: claim.care.replace(/\n/g, "<br>"),
            }}
          ></div>
        </section>
        <section>
          <div>Eligibility:</div>
          <div>{claim.eligibility}</div>
        </section>
        <div className="pr-3">Sizing Charts</div>
      </div>
      {isSuiConnected ? (
        <div className="flex flex-col gap-2 lg:flex-row items-center justify-center">
          <NftsDialog name={claim.contract.name} nftId={claim.contract.name} />
          <Button className="pt-0" onClick={() => disconnect()}>
            [DISCONNECT]
          </Button>
        </div>
      ) : (
        <ConnectModal trigger={<Button>[CONNECT TO CLAIM]</Button>} />
      )}
    </div>
  );
}
