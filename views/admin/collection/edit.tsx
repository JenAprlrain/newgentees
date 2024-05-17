import { updateClaim } from "@/api/claim";
import { uploadImage } from "@/api/upload";
import { Button } from "@/components/button";
import { Dropdown } from "@/components/input/dropdown";
import { useAuth } from "@/context/AuthContext";
import { Claim } from "@/types/claim";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export function EditCollection({ claim }: { claim: Claim }) {
  const [editedClaim, setClaim] = useState<Claim>(claim);
  const [selectedChain, setSelectedChain] = useState(
    claim.contract.type === "move" ? "sui" : "evm"
  );

  const [file, setFile] = useState<File | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const { token } = useAuth();
  const router = useRouter();

  async function editCollection() {
    updateClaim(
      editedClaim.id,
      editedClaim.title,
      editedClaim.specs,
      editedClaim.care,
      editedClaim.eligibility,
      "",
      editedClaim.succesful,
      editedClaim.link,
      // if there is image, upload or use the same image
      file ? await uploadImage(file, token) : editedClaim.image.image,
      editedClaim.open,
      editedClaim.open_for_claim ? "true" : "false",
      {
        address: editedClaim.contract.address,
        name: editedClaim.contract.name,
        type: selectedChain === "sui" ? "move" : "evm",
        abi: editedClaim.contract.abi,
      },
      token
    )
      .then(() => {
        toast.success("Collection updated");
        router.push("/admin/collection/list");
      })
      .catch(() => {
        toast.error("Failed to update collection");
      });
  }

  return (
    <div>
      <form
        className="flex flex-col gap-4 text-lg lg:text-3xl justify-center uppercase"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-row gap-4">
          <div>collection name:</div>
          <input
            type="text"
            id="collection-name"
            placeholder="Collection Name"
            className="bg-black text-white"
            defaultValue={claim.title}
            onChange={(e) =>
              setClaim({ ...editedClaim, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>collection specs:</div>
          <textarea
            id="collection-specs"
            placeholder="Collection Specs"
            className="bg-black text-white"
            defaultValue={claim.specs}
            onChange={(e) =>
              setClaim({ ...editedClaim, specs: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>collection care:</div>
          <textarea
            id="collection-care"
            placeholder="Collection Care"
            className="bg-black text-white"
            defaultValue={claim.care}
            onChange={(e) => setClaim({ ...editedClaim, care: e.target.value })}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>collection image:</div>
          <input
            type="file"
            id="collection-image"
            ref={fileRef}
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>collection eligibility:</div>
          <input
            type="text"
            id="collection-eligibility"
            placeholder="Collection Eligibility"
            className="bg-black text-white"
            defaultValue={claim.eligibility}
            onChange={(e) =>
              setClaim({ ...editedClaim, eligibility: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>collection contract:</div>
          <input
            type="text"
            id="collection-contract"
            placeholder="Collection Contract"
            className="bg-black text-white"
            defaultValue={claim.contract.address}
            onChange={(e) =>
              setClaim({
                ...editedClaim,
                contract: {
                  ...editedClaim.contract,
                  address: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>collection contract name:</div>
          <input
            type="text"
            id="collection-contract-name"
            placeholder="Collection Contract Name"
            className="bg-black text-white"
            defaultValue={claim.contract.name}
            onChange={(e) =>
              setClaim({
                ...editedClaim,
                contract: {
                  ...editedClaim.contract,
                  name: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>collection ABI:</div>
          <input
            type="text"
            id="collection-abi"
            placeholder="Collection ABI"
            className="bg-black text-white"
            defaultValue={claim.contract.abi}
            onChange={(e) =>
              setClaim({
                ...editedClaim,
                contract: {
                  ...editedClaim.contract,
                  abi: e.target.value,
                },
              })
            }
          />
        </div>
        <Dropdown
          label="Select Chain:"
          items={["sui", "evm"]}
          onSelectChange={(value) => setSelectedChain(value)}
          selectedItem={selectedChain}
        />
        <div className="flex flex-row gap-4">
          <div>collection on successful:</div>
          <input
            type="text"
            id="collection-on-successful"
            placeholder="Collection On Successful"
            className="bg-black text-white"
            defaultValue={claim.succesful}
            onChange={(e) =>
              setClaim({ ...editedClaim, succesful: e.target.value })
            }
          />
        </div>
        <div className="flex flex-row gap-4">
          <div>Open for claim?</div>
          <input
            type="checkbox"
            id="collection-open-for-claim"
            defaultChecked={claim.open_for_claim}
            onChange={(e) =>
              setClaim({
                ...editedClaim,
                open_for_claim: e.target.checked,
              })
            }
          />
        </div>
        <Button onClick={editCollection}>Save</Button>
      </form>
    </div>
  );
}
