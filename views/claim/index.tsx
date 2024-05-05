import { Button } from "@/components/button";
import { Claim } from "@/types/claim";

export function ClaimSwag({ claim }: { claim: Claim }) {
  return (
    <div className="font-normal text-3xl leading-8 text-start flex flex-col gap-10">
      <div className="text-center">{claim.title}</div>
      <div className="flex flex-col gap-5">
        <div className="justify-center items-center flex">
          <img
            src={claim.image}
            alt={claim.title}
            className="w-40 h-full object-cover bg-gray-200"
          />
        </div>
        <section>
          <div>Specs:</div>
          <div
            dangerouslySetInnerHTML={{
              __html: claim.specs,
            }}
          ></div>
        </section>
        <section>
          <div>Care:</div>
          <div
            dangerouslySetInnerHTML={{
              __html: claim.care,
            }}
          ></div>
        </section>
        <section>
          <div>Eligibility:</div>
          <div>{claim.eligibility}</div>
        </section>
        <div className="pr-3">Sizing Charts</div>
      </div>
      <Button>[CONNECT TO CLAIM]</Button>
    </div>
  );
}
