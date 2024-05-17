import { createPartner } from "@/api/partner";
import { uploadImage } from "@/api/upload";
import { Button } from "@/components/button";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

export function CreatePartner() {
  const { token } = useAuth();
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataObj: IFormData = {
      "partner-name": (
        document.getElementById("partner-name") as HTMLInputElement
      ).value,
      "partner-description": (
        document.getElementById("partner-description") as HTMLInputElement
      ).value,
      "partner-website": (
        document.getElementById("partner-website") as HTMLInputElement
      ).value,
      // @ts-expect-error
      "partner-image-1": (
        document.getElementById("partner-image-1") as HTMLInputElement
      ).files?.[0],
      // @ts-expect-error
      "partner-image-2": (
        document.getElementById("partner-image-2") as HTMLInputElement
      ).files?.[0],
      // @ts-expect-error
      "partner-image-3": (
        document.getElementById("partner-image-3") as HTMLInputElement
      ).files?.[0],
      "partner-link": (
        document.getElementById("partner-link") as HTMLInputElement
      ).value,
      // @ts-expect-error
      "partner-image": (
        document.getElementById("partner-image") as HTMLInputElement
      ).files?.[0],
    };

    createPartner(
      dataObj["partner-name"],
      dataObj["partner-description"],
      dataObj["partner-website"],
      dataObj["partner-link"],
      await uploadImage(dataObj["partner-image"], token),
      [
        // upload images if they exist
        dataObj["partner-image-1"]
          ? await uploadImage(dataObj["partner-image-1"], token)
          : "",
        dataObj["partner-image-2"]
          ? await uploadImage(dataObj["partner-image-2"], token)
          : "",
        dataObj["partner-image-3"]
          ? await uploadImage(dataObj["partner-image-3"], token)
          : "",
      ].filter((img) => img.length > 0),
      token
    )
      .then((res) => {
        if (res.ok) {
          toast.success("Partner created");
          router.push("/admin/partner/list");
        } else {
          toast.error("Failed to create partner");
        }
      })
      .catch(() => {
        toast.error("Failed to create partner");
      });
  };

  return (
    <form
      id="form"
      onSubmit={onSubmit}
      className="flex flex-col gap-4 text-lg lg:text-3xl justify-center uppercase"
    >
      <div className="flex flex-row gap-4">
        <div>partner name:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="partner-name"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>partner description:</div>
        <textarea
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="partner-description"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>website:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="partner-website"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>image 1:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="partner-image-1"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>image 2:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="partner-image-2"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>image 3:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="partner-image-3"
        />
      </div>
      <div className="flex flex-row gap-4">
        <div>link:</div>
        <input
          type="text"
          className="bg-black text-white"
          placeholder="[ENTER]"
          id="partner-link"
        />
      </div>
      <div className="flex flex-col gap-4">
        <div>partner image:</div>
        <input
          type="file"
          className="bg-black text-white"
          placeholder="[UPLOAD]"
          id="partner-image"
        />
      </div>
      <Button>[CREATE PARTNER]</Button>
    </form>
  );
}

interface IFormData {
  "partner-name": string;
  "partner-description": string;
  "partner-website": string;
  "partner-image-1": File;
  "partner-image-2": File;
  "partner-image-3": File;
  "partner-link": string;
  "partner-image": File;
}
