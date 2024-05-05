import { FC, PropsWithChildren } from "react";
import { Header } from "./header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="uppercase text-white">
      <div className="fixed bg-black w-full text-black px-8 py-4">
        <Header />
      </div>
      <main className="pt-20 sm:pt-24 md:pt-28 flex flex-col items-center justify-center px-8 pb-5">
        <div className="container flex items-center justify-center mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
