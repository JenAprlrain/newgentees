import React, { useState } from "react";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { cn } from "@/lib/utils/cn";
import { Claim } from "@/types/claim";

export function ClaimSwagForm({ claim }: { claim: Claim }) {
  const items = ["S", "M", "L", "XL", "XXL", "XXXL"];
  const [activeItem, setActiveItem] = useState(items[0]);

  return (
    <div className="font-normal text-xl md:text-3xl leading-8 text-start flex flex-col gap-6">
      <div className="w-full text-center">{claim.title}</div>
      <div className="flex flex-col gap-5 text-start">
        <div className="">Claim</div>
        <div className="pl-10 flex flex-col gap-5">
          <Input label="First Name:" />
          <Input label="Last Name:" />
          <Input label="Email:" />
          <TextArea label="Address Line 1:" />
          <TextArea label="Address Line 2:" />
          <Input label="City:" />
          <Input label="State/Province:" />
          <Input label="Zip/Postal Code:" />
          <Input label="Country:" />
          <Dropdown
            label="Size:"
            items={items}
            selectedItem={activeItem}
            onSelectChange={setActiveItem}
          />
          <div>
            <Button>[SUBMIT ORDER]</Button>
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
