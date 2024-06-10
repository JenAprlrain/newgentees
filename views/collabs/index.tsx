import { Link } from "@/components/link";

export const Collabs = () => {
  return (
    <div className="flex flex-col gap-3 text-3xl">
      <div>DEV/ARTIST</div>
      <div className="font-bold">Don&apos;t drop ship your way through the bull run.</div>
      <div className="flex flex-col">
        <Link href="/collabs/learn-more">Learn More</Link>
        <Link href="https://forms.gle/foF5hKbpuNkcH9UZ6">Collab Request Form</Link>
      </div>
    </div>
  );
};
