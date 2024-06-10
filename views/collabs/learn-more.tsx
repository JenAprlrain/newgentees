import { Button } from "@/components/button";

export const LearnMore = () => {
  return (
    <div className="flex flex-col gap-10 lg:px-2">
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
          <div>1 - Take 5 minutes and complete our Drop Request <a href="https://forms.gle/foF5hKbpuNkcH9UZ6" className="hover:text-matrix-green transition-all duration-300">[FORM]</a> </div>
          <div>
            2 - WE WILL REVIEW THE FORM AND CONTACT YOU. IF WE CAN ADD VALUE TO YOUR VISION, WE WILL WORK WITH YOUR TEAM REGARDING ALL DROP DETAILS (DESIGN, DROP SIZE, TIMING, GARMENT, ETC).{" "}
          </div>
          <div>
            3 - We do all the product development, production, and fulfillment
            for the drop to ensure your community has the best possible
            experience
          </div>
        </div>
        <div className="flex items-center justify-center">
        <div className="flex py-5 lg:w-[700px] ">
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
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div>
          <div className="font-bold">Why not print on demand?</div> Drop
          shipping and print on demand solutions often offer less customization
          options and lower quality consistent with today’s fast fashion and
          mass production. We are completely counter-culture to this movement,
          and take it a step further. By securing apparel to the blockchain
          through 1-of-1 pairing, we add a layer of security, sustainability,
          proof-of-ownership and authenticity consistent with our desire to
          provide maximum value to our partners and their communities.
        </div>
        <Button><a href="/general/gallery" target="_blank">{">"}GALLERY</a></Button>
        <Button><a href="/collabs/partners" target="_blank">{">"}PARTNERS</a></Button>
        <Button><a href="https://forms.gle/foF5hKbpuNkcH9UZ6" target="_blank">{">"}CREATE DROP EXPERIENCE</a></Button>
      </div>
    </div>
  );
};
