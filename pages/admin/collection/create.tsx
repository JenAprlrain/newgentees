import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export default function CreateCollection() {
  const [selectedChain, setSelectedChain] = useState("sui");
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  function createCollection(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData();

    data.append(
      "collection-name",
      (document.getElementById("collection-name") as HTMLInputElement).value
    );
    data.append("collection-image", file as File);
    data.append(
      "collection-specs",
      (document.getElementById("collection-specs") as HTMLInputElement).value
    );
    data.append(
      "collection-care",
      (document.getElementById("collection-care") as HTMLInputElement).value
    );
    data.append(
      "collection-eligibility",
      (document.getElementById("collection-eligibility") as HTMLInputElement)
        .value
    );
    data.append(
      "collection-contract",
      (document.getElementById("collection-contract") as HTMLInputElement).value
    );
    data.append(
      "collection-contract-name",
      (document.getElementById("collection-contract-name") as HTMLInputElement)
        .value
    );
    data.append(
      "collection-abi",
      (document.getElementById("collection-abi") as HTMLInputElement).value
    );

    let dataObj: IFormData = {
      "collection-name": data.get("collection-name") as string,
      "collection-image": file as File,
      "collection-specs": data.get("collection-specs") as string,
      "collection-care": data.get("collection-care") as string,
      "collection-eligibility": data.get("collection-eligibility") as string,
      "collection-contract": data.get("collection-contract") as string,
      "collection-contract-name": data.get(
        "collection-contract-name"
      ) as string,
      "collection-abi": data.get("collection-abi") as string,
    };

    if (dataObj["collection-name"].length === 0) {
      toast.error("Please enter a collection name");
      return;
    }

    if (file === null) {
      toast.error("Please upload a collection image");
      return;
    }

    if (dataObj["collection-specs"] === "") {
      toast.error("Please enter collection specs");
      return;
    }

    if (dataObj["collection-care"] === "") {
      toast.error("Please enter collection care");
      return;
    }

    if (dataObj["collection-eligibility"] === "") {
      toast.error("Please enter collection eligibility");
      return;
    }

    if (dataObj["collection-contract"] === "") {
      toast.error("Please enter collection contract");
      return;
    }

    if (dataObj["collection-contract-name"] === "") {
      toast.error("Please enter collection contract name");
      return;
    }

    if (dataObj["collection-abi"] === "" && selectedChain === "evm") {
      toast.error("Please enter collection abi");
      return;
    }
  }

  return (
    <form
      id="form"
      onSubmit={createCollection}
      className="flex flex-col gap-4 text-lg lg:text-3xl justify-center uppercase"
    >
      <div className="flex flex-row gap-4">
        <div>collection name:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-name"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>collection image:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="collection-image"
          ref={fileRef}
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>specs:</div>
        <textarea
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-specs"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>care:</div>
        <textarea
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-care"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>eligibility:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-eligibility"
        />
      </div>
      <div className="flex flex-row gap-4">
        <Dropdown
          label="Select Chain:"
          items={["sui", "evm"]}
          onSelectChange={(value) => setSelectedChain(value)}
          selectedItem={selectedChain}
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>contract:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-contract"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>contract name:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-contract-name"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>abi:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="collection-abi"
        />
      </div>
      <Button type="submit">[CREATE COLLECTION]</Button>
    </form>
  );
}

interface IFormData {
  "collection-name": string;
  "collection-image": File;
  "collection-specs": string;
  "collection-care": string;
  "collection-eligibility": string;
  "collection-contract": string;
  "collection-contract-name": string;
  "collection-abi": string;
}
