import { Link } from "@/components/link";

export const Degen = () => {
  return (
    <div className="flex flex-col gap-4 text-3xl">
      <div>DEGENS</div>
      <div className="font-bold">Secure your wardrobe with the blockchain. </div>
      <div className="flex flex-col">
        <Link href={"/degen/claims"}>Claims</Link>
        <Link href={"/degen/tees"}>My tees</Link>
        <Link href={"/degen/house-collections"}>House Collections</Link>
        <Link href={"/degen/haiku"}>Haiku Gang</Link>
      </div>
    </div>
  );
};
