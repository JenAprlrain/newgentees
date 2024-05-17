// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { createId } from "@paralleldrive/cuid2";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const storage = getStorage(firebase);

async function uploadImageToFirebase(
  image: Buffer,
  mime: string
): Promise<{
  url: string;
  cuid: string;
}> {
  if (mime === "image/gif") {
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
