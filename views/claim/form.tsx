import React, { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { cn } from "@/lib/utils/cn";
import { Claim } from "@/types/claim";
import { createOrder } from "@/api";
import { useSignPersonalMessage } from "@mysten/dapp-kit";
import toast from "react-hot-toast";
import { useNft } from "@/context/NftContext";
import { useRouter } from "next/router";

interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export function ClaimSwagForm({ claim, id }: { claim: Claim; id: string }) {
  const items = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const [activeItem, setActiveItem] = useState(items[0]);
  const { mutate: signMessage } = useSignPersonalMessage();
  const { isSuiConnected, isEthConnected } = useNft();
  const router = useRouter();

  useEffect(() => {
    if (!isSuiConnected && !isEthConnected) {
      toast.error("Please connect to your wallet");
      router.push("/degen/claims");
    }
  }, [isSuiConnected, isEthConnected, router]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (claim.contract.type !== "SUI") return;

    const data = Object.fromEntries(
      new FormData(e.currentTarget) as any
    ) as IFormData;

    signMessage(
      {
        message: new TextEncoder().encode(id),
      },
      {
        onSuccess: async (signature) => {
          const create = await createOrder({
            id: id,
            signature: signature.signature,
            form: {
              address_line_one: data.address1,
              address_line_two: data.address2,
              city: data.city,
              country: data.country,
              email: data.email,
              first_name: data.firstName,
              last_name: data.lastName,
              phone: "",
              physical_size: activeItem,
              zipcode: data.zip,
              state: data.state,
            },
          });

          if (!create) {
            toast.error("Failed to create order");
          }
        },
      }
    );
  }

  return (
    <div className="font-normal text-xl md:text-3xl leading-8 text-start flex flex-col gap-6">
      <div className="w-full text-center">{claim.title}</div>
      <div className="flex flex-col gap-5 text-start">
        <div className="">Claim</div>
        <form onSubmit={onSubmit} className="pl-10 flex flex-col gap-5">
          <Input id="firstname" label="First Name:" />
          <Input id="lastname" label="Last Name:" />
          <Input id="email" label="Email:" />
          <TextArea id="address1" label="Address Line 1:" />
          <TextArea id="address2" label="Address Line 2:" />
          <Input id="city" label="City:" />
          <Input id="state" label="State/Province:" />
          <Input id="zip" label="Zip/Postal Code:" />
          <Input id="country" label="Country:" />
          <Dropdown
            label="Size:"
            items={items}
            selectedItem={activeItem}
            onSelectChange={setActiveItem}
          />
          <div>
            <Button type="submit">[SUBMIT ORDER]</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

interface InputArgs extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputArgs) => (
  <div className="flex flex-col gap-2 lg:flex-row">
    {label}
    <input
      placeholder="[ENTER]"
      className={cn(
        "text-matrix-green placeholder:text-matrix-green outline-none bg-black",
        "autofill:bg-transparent autofill:text-white autofill:border-0 autofill:shadow-none"
      )}
      {...props}
    />
  </div>
);

interface TextAreaArgs
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, ...props }: TextAreaArgs) => (
  <div className="flex flex-col gap-2 lg:flex-row">
    {label}
    <textarea
      placeholder="[ENTER]"
      className={cn(
        "text-matrix-green placeholder:text-matrix-green outline-none bg-black resize-none h-20",
        "autofill:bg-transparent autofill:text-white autofill:border-0 autofill:shadow-none",
        "scrollbar-width-thin scrollbar-track-matrix-green"
      )}
      {...props}
    />
  </div>
);
