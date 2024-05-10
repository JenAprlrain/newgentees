import { Link } from "@/components/link";
export default function List () {
  return (
    <div className="flex flex-col gap-4 text-3xl justify-center text-start">
        <section className="flex flex-col">
            <div>Collections</div>
            <Link href="/admin/createcollection">Create</Link>
            <Link href="/">List</Link>
        </section>
        <section className="flex flex-col">
            <div>Partners</div>
            <Link href="/admin/createpartner">Create</Link>
            <Link href="/">List</Link>
        </section>
        <section className="flex flex-col">
            <div>Gallery</div>
            <Link href="/">Recent Orders</Link>
        </section>
    </div>
  );
};