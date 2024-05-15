import React, { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { cn } from "@/lib/utils/cn";
import { Claim } from "@/types/claim";
import { useSignPersonalMessage } from "@mysten/dapp-kit";
import toast from "react-hot-toast";
import { useNft } from "@/context/NftContext";
import { useRouter } from "next/router";
import { createOrder } from "@/api/order";

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
      router.push("/degen/claim/[nft]", `/degen/claim/${claim.link}`);
    }
  }, [isSuiConnected, isEthConnected, router, claim]);

  async function onSubmit() {
    const formData = new FormData();

    formData.append(
      "firstName",
      (document.getElementById("firstname") as HTMLInputElement).value
    );
    formData.append(
      "lastName",
      (document.getElementById("lastname") as HTMLInputElement).value
    );
    formData.append(
      "email",
      (document.getElementById("email") as HTMLInputElement).value
    );
    formData.append(
      "address1",
      (document.getElementById("address1") as HTMLInputElement).value
    );
    formData.append(
      "address2",
      (document.getElementById("address2") as HTMLInputElement).value
    );
    formData.append(
      "city",
      (document.getElementById("city") as HTMLInputElement).value
    );
    formData.append(
      "state",
      (document.getElementById("state") as HTMLInputElement).value
    );
    formData.append(
      "zip",
      (document.getElementById("zip") as HTMLInputElement).value
    );
    formData.append(
      "country",
      (document.getElementById("country") as HTMLInputElement).value
    );

    const data: IFormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      address1: formData.get("address1") as string,
      address2: formData.get("address2") as string,
      city: formData.get("city") as string,
      state: formData.get("state") as string,
      zip: formData.get("zip") as string,
      country: formData.get("country") as string,
    };

    signMessage(
      {
        message: new TextEncoder().encode(id),
      },
      {
        onSuccess: async (signature) => {
          const create = await createOrder(id, signature.signature, {
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
          });

          if (!create) {
            toast.error("Failed to create order");
            return;
          }

          router.push(
            "/degen/claim/[nft]/successful",
            `/degen/claim/${claim.link}/successful`
          );
        },
      }
    );
  }

  return (
    <div className="font-normal text-xl md:text-3xl leading-8 text-start flex flex-col gap-6">
      <div className="w-full text-center">{claim.title}</div>
      <div className="flex flex-col gap-5 text-start">
        <div className="">Claim</div>
        <div className="pl-10 flex flex-col gap-5">
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
            <Button onClick={onSubmit}>[SUBMIT ORDER]</Button>
          </div>
        </div>
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
