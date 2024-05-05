import { Button } from "@/components/button";

export const LearnMore = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="text-3xl">WHO WE ARE</div>
        <div className="text-balance text-sm">
          We are a boutique, full-service blockchain apparel provider for the
          fashion-conscious web 3 brand. We offer bespoke branding opportunities
          fromthe ground up, through intentional partnership and attention to
          creating quality over quantity.
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-3xl">HOW IT WORKS</div>
        <div className="flex flex-col gap-3">
          <div>1 - Take 5 minutes and complete our Drop Request [FORM]</div>
          <div>
            2 - We will review the form and contact you. If we can add value to
            your vision, we will work with your team regarding all drop details
            (drop size, timing, garment, etc).{" "}
          </div>
          <div>
            3 - We do all the product development, production, and fulfillment
            for the drop to ensure your community has the best possible
            experience
          </div>
        </div>
        <div className="flex items-center justify-center py-5">
          <video
            src={"/learn-more.mp4"}
            autoPlay
            muted
            loop
            playsInline
            controls
            className="relative -z-40"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div>
          <span className="font-bold">[Why not print on demand?]</span> Drop
          shipping and print on demand solutions often offer less customization
          options and lower quality consistent with today’s fast fashion and
          mass production. We are completely counter-culture to this movement,
          and take it a step further. By securing apparel to the blockchain
          through 1-of-1 pairing, we add a layer of security, sustainability,
          proof-of-ownership and authenticity consistent with our desire to
          provide maximum value to our partners and their communities.
        </div>
        <Button>[GALLERY]</Button>
        <Button>[PARTNERS]</Button>
        <Button>[CREATE DROP EXPERIENCE]</Button>
      </div>
    </div>
  );
};
