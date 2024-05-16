import { normalizeImage } from ".";
import { API_URL } from ".";

export async function uploadImage(image: File, token: string): Promise<string> {
  const res = await fetch(`${API_URL}/v1/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image: await normalizeImage(image) }),
  });

  const data = await res.json();
  return data.url;
}
