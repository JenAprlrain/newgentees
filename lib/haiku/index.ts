import toast from "react-hot-toast";
import { syllable } from 'syllable'


function isHaiku(text: string) {
    const lines = text.split("\n");
    const syllables = lines.map((line) => countSyllables(line.trim()));

    if (syllables.length !== 3) {
        toast.error("A haiku must have exactly 3 lines.");
        return false;
    }

    if (syllables[0] !== 5) {
        toast.error(`Line 1 has ${syllables[0]} syllables, it should have 5 syllables`);
        return false;
    }

    if (syllables[1] !== 7) {
        toast.error(`Line 2 has ${syllables[1]} syllables, it should have 7 syllables`);
        return false;
    }

    if (syllables[2] !== 5) {
        toast.error(`Line 3 has ${syllables[2]} syllables, it should have 5 syllables`);
        return false;
    }

    return true;
}

function countSyllables(text: string) {
    const words = text.split(" ");
    const syllables = words.map((word) => countSyllablesInWord(word));
    return syllables.reduce((acc, curr) => acc + curr, 0);
}

function countSyllablesInWord(word: string) {
    return syllable(word);
}

export function onThaikuExport(width: number, height: number, haikuText: string) {
    if (!isHaiku(haikuText)) {
        return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#2BE233";
        ctx.font = "30px Courier Prime";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const lines = haikuText.split("\n");
        const space = 40;
        const y = canvas.height / 2 - (lines.length * space) / 2;
        lines.forEach((line, index) => {
            ctx.fillText(line.toUpperCase(), canvas.width / 2, y + index * space);
        });

        // Put nftees logo
        const img = new Image();
        img.src = "/logo.svg";

        img.onload = () => {
            // make the image smaller
            const canvas2 = document.createElement("canvas");
            // ratio
            const ratio = img.width / img.height;
            // make the ratio 5x smaller
            canvas2.width = img.width / 10;
            canvas2.height = canvas2.width / ratio;
            const ctx2 = canvas2.getContext("2d");

            if (ctx2) {
                ctx2.drawImage(img, 0, 0, canvas2.width, canvas2.height);
                ctx.drawImage(canvas2, canvas.width / 2 - canvas2.width / 2, canvas.height - canvas2.height - 10);
            }

            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "haiku.png";
            a.click();
        };
    }
}