import { API_URL } from ".";

export function createGalleryImage(image: any, index: number, token: string) {
  return fetch(`${API_URL}/v1/gallery`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      image,
      index,
    }),
  });
}

export function updateGalleryImage(id: string, index: number, token: string) {
  return fetch(`${API_URL}/v1/gallery`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
      index,
    }),
  });
}

export function getGalleryImages() {
  return fetch(`${API_URL}/v1/gallery`);
}

export function deleteGalleryImage(id: string, token: string) {
  return fetch(`${API_URL}/v1/gallery`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
    }),
  });
}
