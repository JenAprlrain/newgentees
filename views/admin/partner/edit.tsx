import { updatePartner } from "@/api/partner";
import { uploadImage } from "@/api/upload";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { useAuth } from "@/context/AuthContext";
import { Partner } from "@/types/partner";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function EditPartner({ partner }: { partner: Partner }) {
  const [editPartner, setEditPartner] = useState<Partner>(partner);

  const fileRef = useRef<HTMLInputElement>(null);
  const fileRef2 = useRef<HTMLInputElement>(null);
  const fileRef3 = useRef<HTMLInputElement>(null);
  const fileRef4 = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);
  const { token } = useAuth();
  const router = useRouter();

  async function updatePartnerSubmit() {
    updatePartner(
      editPartner.id,
      editPartner.title,
      editPartner.description,
      editPartner.website,
      editPartner.link,
      // @ts-expect-error
      file
        ? await uploadImage(file)
        : editPartner.image.find((img) => img.profile_image)?.image,
      [
        file2
          ? await uploadImage(file2)
          : editPartner.image.filter((img) => !img.profile_image)[0]?.image ||
            "",
        file3
          ? await uploadImage(file3)
          : editPartner.image.filter((img) => !img.profile_image)[1]?.image ||
            "",
        file4
          ? await uploadImage(file4)
          : editPartner.image.filter((img) => !img.profile_image)[2]?.image ||
            "",
      ].filter((img) => img.length > 0),
      token
    ).then((res) => {
      if (res.ok) {
        toast.success("Partner updated successfully");
        router.push("/admin/partner/list");
      } else {
        toast.error("Failed to update partner");
      }
    });
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 text-lg lg:text-3xl justify-center uppercase"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-row gap-4">
          <div>Partner Title:</div>
          <input
            type="text"
            value={editPartner.title}
            onChange={(e) =>
              setEditPartner({ ...editPartner, title: e.target.value })
            }
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>Partner Description:</div>
          <textarea
            value={editPartner.description}
            onChange={(e) =>
              setEditPartner({ ...editPartner, description: e.target.value })
            }
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>Website:</div>
          <input
            type="text"
            value={editPartner.website}
            onChange={(e) =>
              setEditPartner({ ...editPartner, website: e.target.value })
            }
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>Link:</div>
          <input
            type="text"
            value={editPartner.link}
            onChange={(e) =>
              setEditPartner({ ...editPartner, link: e.target.value })
            }
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>Partner Image:</div>
          <input
            type="file"
            ref={fileRef}
            onChange={(e) => setFile(e.target.files?.[0] as File)}
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>Image 1:</div>
          <input
            type="file"
            ref={fileRef2}
            onChange={(e) => setFile2(e.target.files?.[0] as File)}
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>Image 2:</div>
          <input
            type="file"
            ref={fileRef3}
            onChange={(e) => setFile3(e.target.files?.[0] as File)}
            className="bg-black text-white"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>Image 3:</div>
          <input
            type="file"
            ref={fileRef4}
            onChange={(e) => setFile4(e.target.files?.[0] as File)}
            className="bg-black text-white"
          />
        </div>
        <Button onClick={updatePartnerSubmit}>Update Partner</Button>
      </form>
    </div>
  );
}
