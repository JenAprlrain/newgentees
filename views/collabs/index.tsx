import { Link } from "@/components/link";

export const Collabs = () => {
  return (
    <div className="flex flex-col gap-3 text-3xl">
      <div>Don&apos;t drop ship your way through the bull run.</div>
      <div className="flex flex-col">
        <Link href="/collabs/learn-more">Learn More</Link>
        <Link href="/collabs/request-form">Collab Request Form</Link>
      </div>
    </div>
  );
};
