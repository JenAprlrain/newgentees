import { Button } from "@/components/button";

export default function CreatePartner() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    data.append(
      "partner-name",
      (document.getElementById("partner-name") as HTMLInputElement).value
    );
    data.append(
      "partner-description",
      (document.getElementById("partner-description") as HTMLInputElement).value
    );
    data.append(
      "partner-website",
      (document.getElementById("partner-website") as HTMLInputElement).value
    );
    data.append(
      "partner-image-1",
      (document.getElementById("partner-image-1") as HTMLInputElement)
        .files?.[0] as File
    );
    data.append(
      "partner-image-2",
      (document.getElementById("partner-image-2") as HTMLInputElement)
        .files?.[0] as File
    );
    data.append(
      "partner-image-3",
      (document.getElementById("partner-image-3") as HTMLInputElement)
        .files?.[0] as File
    );
    data.append(
      "partner-link",
      (document.getElementById("partner-link") as HTMLInputElement).value
    );
    data.append(
      "partner-image",
      (document.getElementById("partner-image") as HTMLInputElement)
        .files?.[0] as File
    );

    const dataObj: IFormData = {
      "partner-name": data.get("partner-name") as string,
      "partner-description": data.get("partner-description") as string,
      "partner-website": data.get("partner-website") as string,
      "partner-image-1": data.get("partner-image-1") as File,
      "partner-image-2": data.get("partner-image-2") as File,
      "partner-image-3": data.get("partner-image-3") as File,
      "partner-link": data.get("partner-link") as string,
      "partner-image": data.get("partner-image") as File,
    };

    console.log(dataObj);
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