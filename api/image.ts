// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { createId } from "@paralleldrive/cuid2";
import { fileTypeFromBuffer } from "file-type";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_SENDER_ID,
  appId: process.env.FB_APP_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const storage = getStorage(firebase);

async function uploadImageToFirebase(image: Buffer): Promise<{
  url: string;
  cuid: string;
}> {
  let fileType = await fileTypeFromBuffer(image);
  if (fileType === undefined) {
    throw new Error("Invalid Image");
  }

  if (fileType.mime === "image/gif") {
    let cuid = createId();
    let storageRef = ref(storage, `images/${cuid}.gif`);
    await uploadBytes(storageRef, image, { contentType: "image/gif" });
    return {
      url: `https://firebasestorage.googleapis.com/v0/b/${process.env.FB_STORAGE_BUCKET}/o/images%2F${cuid}.gif?alt=media`,
      cuid,
    };
  }

  let cuid = createId();
  let storageRef = ref(storage, `images/${cuid}.webp`);
  await uploadBytes(storageRef, image, { contentType: "image/webp" });
  return {
    url: `https://firebasestorage.googleapis.com/v0/b/${process.env.FB_STORAGE_BUCKET}/o/images%2F${cuid}.webp?alt=media`,
    cuid,
  };
}

export { uploadImageToFirebase };
