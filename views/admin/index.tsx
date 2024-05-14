import { Link } from "@/components/link";
import AuthProvider from "@/context/AuthContext";

export function AdminHomePage() {
  return (
    <div className="flex flex-col gap-4 text-3xl justify-center text-start">
      <section className="flex flex-col">
        <div className="font-bold">Claims</div>
        <Link href="/admin/collection/create">Create</Link>
        <Link href="/">List</Link>
      </section>
      <section className="flex flex-col">
        <div className="font-bold">Partners</div>
        <Link href="/admin/partner/create">Create</Link>
        <Link href="/">List</Link>
      </section>
      <section className="flex flex-col">
        <div className="font-bold">General & Orders</div>
        <Link href="/admin/gallery">Gallery</Link>
        <Link href="/">Recent Orders</Link>
      </section>
    </div>
  );
}
