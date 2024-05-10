import { Button } from "@/components/button";
export default function createPartner () {
  return (
    <div className="flex flex-col gap-4 text-3xl justify-center uppercase">
        <div className="flex flex-row gap-4">
            <div>partner name:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>partner describtion:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>website:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>image 1:</div>
        <input type="text" className="bg-black text-white" placeholder="[UPLOAD]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>image 2:</div>
        <input type="text" className="bg-black text-white" placeholder="[UPLOAD]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>image 3:</div>
        <input type="text" className="bg-black text-white" placeholder="[UPLOAD]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>link:</div>
        <input type="text" className="bg-black text-white" placeholder="[ENTER]" />
        </div>
        <div className="flex flex-row gap-4">
            <div>partner image:</div>
        <input type="text" className="bg-black text-white" placeholder="[UPLOAD]" />
        </div>
        <Button>[CREATE PARTNER]</Button>
    </div>
  );
};
