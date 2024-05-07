import { Shield } from "@phosphor-icons/react";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 text-lg">
      <div className="font-bold text-xl">Technology</div>
      <div>
        Base Web 3 Technology – From the beginning, OfficialNFTees has utilized
        QR codes to enhance the experience of owning one of our NFTs and
        physical replicas (the combination of which is often referred to as
        Phygitals). With the addition of our Web 3 Wardrobe ™, users can prove
        ownership of their NFTs through a simple QR scan.
      </div>
      <div>
        Series 1 Technology – through partnership with Authentic Vision, a world
        leader in authentication labels, and their Meta Anchor technology,
        OfficialNFTees has added a layer of security to our physicals. Meta
        Anchors are a serialized, 1/1 holographic QR labels that are not
        replicable, even by the machines that created them. This technology adds
        a layer of verification of authenticity that precedes the proof of
        ownership over the NFTee in the Web3 Wardrobe ™.
      </div>
      <div className="flex flex-row gap-2 items-center justify-center text-center">
        <Shield size={64} weight="fill" />
        Protected by holographic shield.
      </div>
    </div>
  );
}