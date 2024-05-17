import { normalizeImage } from "@/api";
import { createHouseCollection } from "@/api/house-collection";
import { uploadImage } from "@/api/upload";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

interface IFormData {
  title: string;
  description: string;
  website: string;
  link: string;
  image: string;
  type: string;
  "collection-image-1": File;
  "collection-image-2": File;
  "collection-image-3": File;
  contract: {
    address: string;
    name: string;
    type: string;
    abi?: string;
  };
}

export function HouseCollectionCreate() {
  const [type, setType] = useState("current"); // ["current", "past", "upcoming"]
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const { token } = useAuth();
  const router = useRouter();

  async function createHouseCollectionEvent(
    e: React.FormEvent<HTMLFormElement>
  ) {
    if (!token) {
      toast.error("You must be logged in to create a house collection");
      return;
    }

    if (!file) {
      toast.error("You must provide an image");
      return;
    }

    e.preventDefault();

    const formData: IFormData = {
      title: (document.getElementById("title") as HTMLInputElement).value,
      description: (document.getElementById("description") as HTMLInputElement)
        .value,
      website: (document.getElementById("website") as HTMLInputElement).value,
      link: (document.getElementById("link") as HTMLInputElement).value,
      image: "",
      type,
      contract: {
        address: (
          document.getElementById("contract.address") as HTMLInputElement
        ).value,
        name: (document.getElementById("contract.name") as HTMLInputElement)
          .value,
        type: "move",
        abi: (
          document.getElementById("contract.abi") as HTMLInputElement
        ).value.replace(/\n/g, ""),
      },
      "collection-image-1": (
        document.getElementById("collection-image-1") as HTMLInputElement
      ).files?.[0] as File,
      "collection-image-2": (
        document.getElementById("collection-image-2") as HTMLInputElement
      ).files?.[0] as File,
      "collection-image-3": (
        document.getElementById("collection-image-3") as HTMLInputElement
      ).files?.[0] as File,
    };

    createHouseCollection(
      formData.title,
      formData.description,
      formData.website,
      formData.link,
      await uploadImage(file, token),
      [
        // upload images if they exist
        formData["collection-image-1"]
          ? await uploadImage(formData["collection-image-1"], token)
          : "",
        formData["collection-image-2"]
          ? await uploadImage(formData["collection-image-2"], token)
          : "",
        formData["collection-image-3"]
          ? await uploadImage(formData["collection-image-3"], token)
          : "",
      ].filter((img) => img.length > 0),
      formData.type,
      formData.contract,
      token
    )
      .then((res) => {
        toast.success("House collection created");
        router.push("/admin/house-collection/list");
      })
      .catch((err) => {
        toast.error("Failed to create house collection");
      });
  }

  return (
    <form
      id="form"
      onSubmit={createHouseCollectionEvent}
      className="flex flex-col gap-4 text-lg lg:text-3xl justify-center uppercase"
    >
      <h1 className="text-4xl lg:text-6xl text-center">
        Create House Collection
      </h1>
      <div className="flex flex-row gap-4">
        <div>title:</div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          required
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>description:</div>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Description"
          required
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>website:</div>
        <input
          type="text"
          name="website"
          id="website"
          placeholder="Website"
          required
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-row gap-4">
        <Dropdown
          label="Select Type:"
          items={["current", "past", "upcoming"]}
          onSelectChange={(value) => setType(value)}
          selectedItem={type}
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>link:</div>
        <input
          type="text"
          id="link"
          name="link"
          placeholder="Link"
          required
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>collection image:</div>
        <input
          type="file"
          name="image"
          id="image"
          required
          className="bg-black text-white"
          ref={fileRef}
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>image 1:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="collection-image-1"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>image 2:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="collection-image-2"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>image 3:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="collection-image-3"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>contract address:</div>
        <input
          type="text"
          id="contract.address"
          name="contract.address"
          placeholder="Contract Address"
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>contract name:</div>
        <input
          type="text"
          id="contract.name"
          name="contract.name"
          placeholder="Contract Name"
          className="bg-black text-white"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>contract abi:</div>
        <textarea
          name="contract.abi"
          id="contract.abi"
          placeholder="Contract ABI"
          className="bg-black text-white"
        />
      </div>
      <Button type="submit">Create</Button>
    </form>
  );
}
