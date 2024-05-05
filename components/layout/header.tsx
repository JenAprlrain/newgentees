import Link from "next/link";
import { Menu } from "./menu";

export const Header = () => (
  <div className="container mx-auto">
    <div className="flex justify-between w-full">
      <div className="flex items-center justify-left">
        <Link href={"/"}>
          <img src="/logo.svg" alt="tees" className="w-20" />
        </Link>
      </div>
      <Menu />
    </div>
  </div>
);
