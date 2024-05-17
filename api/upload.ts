import { normalizeImage } from ".";
import { uploadImageToFirebase } from "./image";

export async function uploadImage(image: File): Promise<string> {
  return (
    await uploadImageToFirebase(
      Buffer.from(await image.arrayBuffer()),
      image.type
    )
  ).url;
}
