import { Button } from "@/components/button";
export default function createCollection () {
  return (
    <div className="flex flex-col gap-4 text-3xl justify-center uppercase">
        <div className="flex flex-row gap-4">
            <div>collection name:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>collection image:</div>
        <input type="text" className="bg-black text-white" placeholder="[UPLOAD]" />
        </div>
        <div className="flex flex-col gap-4">
            <div>specs:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-col gap-4">
            <div>care:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>eligibility:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>chain:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>contract:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>contract name:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>abi:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <Button>[CREATE COLLECTION]</Button>
    </div>
  );
};
