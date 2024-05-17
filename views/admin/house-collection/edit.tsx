import { updateHouseCollection } from "@/api/house-collection";
import { uploadImage } from "@/api/upload";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { useAuth } from "@/context/AuthContext";
import { HouseCollectionType } from "@/types/house-collections";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function EditHouseCollection({
  house_collection,
}: {
  house_collection: HouseCollectionType;
}) {
  const [editHouseCollection, setEditHouseCollection] =
    useState<HouseCollectionType>(house_collection);

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

  async function updateHouseCollectionSubmit() {
    updateHouseCollection(
      editHouseCollection.id,
      editHouseCollection.title,
      editHouseCollection.description,
      editHouseCollection.website,
      editHouseCollection.link,
      // @ts-expect-error
      file
        ? await uploadImage(file, token)
        : editHouseCollection.image.find((img) => img.profile_image)?.image,
      [
        file2
          ? await uploadImage(file2, token)
          : editHouseCollection.image.filter((img) => !img.profile_image)[0]
              ?.image || "",
        file3
          ? await uploadImage(file3, token)
          : editHouseCollection.image.filter((img) => !img.profile_image)[1]
              ?.image || "",
        file4
          ? await uploadImage(file4, token)
          : editHouseCollection.image.filter((img) => !img.profile_image)[2]
              ?.image || "",
      ].filter((img) => img.length > 0),
      editHouseCollection.type,
      {
        address: editHouseCollection.contract.address,
        name: editHouseCollection.contract.name,
        type: editHouseCollection.contract.type,
        abi: editHouseCollection.contract.abi,
      },
      token
    )
      .then(() => {
        toast.success("House Collection updated");
        router.push("/admin/house-collection/list");
      })
      .catch(() => {
        toast.error("Failed to update House Collection");
      });
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 text-lg lg:text-3xl justify-center uppercase"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-row gap-4">
          <div>House Collection Name:</div>
          <input
            type="text"
            id="collection-name"
            placeholder="House Collection Name"
            className="bg-black text-white"
            defaultValue={editHouseCollection.title}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                title: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Description:</div>
          <input
            type="text"
            id="collection-description"
            placeholder="House Collection Description"
            className="bg-black text-white"
            defaultValue={editHouseCollection.description}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                description: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Website:</div>
          <input
            type="text"
            id="collection-website"
            placeholder="House Collection Website"
            className="bg-black text-white"
            defaultValue={editHouseCollection.website}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                website: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Link:</div>
          <input
            type="text"
            id="collection-link"
            placeholder="House Collection Link"
            className="bg-black text-white"
            defaultValue={editHouseCollection.link}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                link: e.target.value,
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Image:</div>
          <input
            type="file"
            id="collection-image"
            ref={fileRef}
            onChange={(e) => setFile(e.target.files?.[0] as File)}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Image 1:</div>
          <input
            type="file"
            id="collection-image"
            ref={fileRef}
            onChange={(e) => setFile2(e.target.files?.[0] as File)}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Image 2:</div>
          <input
            type="file"
            id="collection-image-2"
            ref={fileRef2}
            onChange={(e) => setFile3(e.target.files?.[0] as File)}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Image 3:</div>
          <input
            type="file"
            id="collection-image-3"
            ref={fileRef3}
            onChange={(e) => setFile4(e.target.files?.[0] as File)}
          />
        </div>
        <div className="flex flex-row gap-4">
          <Dropdown
            label="Select Type:"
            items={["current", "past", "upcoming"]}
            onSelectChange={(value) =>
              setEditHouseCollection({
                ...editHouseCollection,
                type: value,
              })
            }
            selectedItem={editHouseCollection.type}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Contract Address:</div>
          <input
            type="text"
            id="collection-contract"
            placeholder="House Collection Contract"
            className="bg-black text-white"
            defaultValue={editHouseCollection.contract.address}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                contract: {
                  ...editHouseCollection.contract,
                  address: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Contract Name:</div>
          <input
            type="text"
            id="collection-contract-name"
            placeholder="House Collection Contract Name"
            className="bg-black text-white"
            defaultValue={editHouseCollection.contract.name}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                contract: {
                  ...editHouseCollection.contract,
                  name: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Contract Type:</div>
          <input
            type="text"
            id="collection-contract-type"
            placeholder="House Collection Contract Type"
            className="bg-black text-white"
            defaultValue={editHouseCollection.contract.type}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                contract: {
                  ...editHouseCollection.contract,
                  type: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>House Collection Contract ABI:</div>
          <input
            type="text"
            id="collection-contract-abi"
            placeholder="House Collection Contract ABI"
            className="bg-black text-white"
            defaultValue={editHouseCollection.contract.abi}
            onChange={(e) =>
              setEditHouseCollection({
                ...editHouseCollection,
                contract: {
                  ...editHouseCollection.contract,
                  abi: e.target.value,
                },
              })
            }
          />
        </div>
        <Button onClick={() => updateHouseCollectionSubmit()}>
          [UPDATE HOUSE COLLECTION]
        </Button>
      </form>
    </div>
  );
}
