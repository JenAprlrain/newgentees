import { Button } from "@/components/button";
import { onThaikuExport } from "@/lib/haiku";
import { useState } from "react";

export const Haiku = () => {
  const [haikuText, setHaikuText] = useState("");
  return (
    <div className="font-normal text-3xl leading-8 text-start flex flex-col gap-6">
      <div>Real ones write poems.</div>
      <div className="flex flex-col w-full border-white border text-[#2BE233] text-center gap-10 pt-5">
        {haikuText.length > 0 ? (
          haikuText
            .split("\n")
            .map((line, index) => <div key={index}>{line}</div>)
        ) : (
          <>
            <div>Items float through space</div>
            <div>Merchants ship from distant lands</div>
            <div>Commerce without weight </div>
          </>
        )}
        <div className="flex items-center justify-center">
          <img src="/logo.svg" alt="tees" className="w-32 pb-5" />
        </div>
      </div>
      <textarea
        placeholder="[WRITE YOUR OWN HERE]"
        className="text-[#2BE233] placeholder:text-[#2BE233] outline-none bg-black resize-none w-full h-40"
        value={haikuText}
        onChange={(e) => setHaikuText(e.target.value)}
      />
      <div className="flex items-center justify-center flex-col lg:flex-row gap-2">
        <Button onClick={() => onThaikuExport(1500, 500, haikuText)}>
          [EXPORT AS BANNER]
        </Button>
        <Button onClick={() => onThaikuExport(750, 750, haikuText)}>
          [EXPORT AS REGULAR]
        </Button>
      </div>
    </div>
  );
};
