import { FC, PropsWithChildren, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { List, X } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { Link } from "../link";

export function Menu() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        <List className="w-10 h-10 text-white" weight="bold" />
      </button>
      <MenuItself show={show} setShow={setShow} />
    </>
  );
}

function MenuItself({
  show,
  setShow,
}: {
  show: boolean;
  setShow: (value: boolean) => void;
}) {
  const router = useRouter();

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [show]);

  useEffect(() => {
    setShow(false);
  }, [router.pathname, setShow]);

  return (
    <Transition
      show={show}
      enter="transform transition ease-in-out duration-500"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-in-out duration-500"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
      className="fixed flex flex-col gap-6 top-0 left-0 lg:p-10 p-5 w-full lg:w-3/4 h-full bg-menu z-[2147483647] overflow-auto"
    >
      <div className="flex justify-end items-center">
        <button onClick={() => setShow(!show)} className="w-14 h-14">
          <X weight="bold" className="w-10 h-10 text-black" />
        </button>
      </div>
      <div className="flex flex-wrap uppercase leading-6 lg:text-5xl text-xl lg:gap-20 gap-10">
        <div className="flex flex-col">
          <Title>General</Title>
          <Link href="/general/gallery">Gallery</Link>
          <Link href="/collabs/partners">PARTNERS</Link>
          <Link href="/general/chains">Chains</Link>
          <Link href="/general/technology">Technology</Link>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <Title>Degens</Title>
            <Link href="/degen/claims">Claim</Link>
            <Link href="/degen/house-collections">HOUSE COLLECTIONS</Link>
            <Link href="/degen/tees">MY TEES</Link>
            <Link href="/degen/haiku">HAIKU GANG</Link>
          </div>
          <div className="flex mt-10 flex-col">
            <Title>DEVS/ARTISTS</Title>
            <Link href="/collabs/learn-more">OUR SERVICE (LEARN MORE)</Link>
            <Link href="/collab">COLLAB REQUEST FORM</Link>
          </div>
        </div>
      </div>
    </Transition>
  );
}

const Title: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className="font-bold">{children}</h1>;
};
