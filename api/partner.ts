import { API_URL } from ".";

export function createPartner(
  title: string,
  description: string,
  website: string,
  link: string,
  image: string,
  images: string[],
  token: string
) {
  return fetch(`${API_URL}/v1/partner`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title, description, website, link, image, images }),
  });
}

export function getPartner(id: string) {
  return fetch(`${API_URL}/v1/partner?id=${id}`);
}

export function getPartners() {
  return fetch(`${API_URL}/v1/partner`);
}

export function deletePartner(id: string, token: string) {
  return fetch(`${API_URL}/v1/partner?id=${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function updatePartner(
  id: string,
  title: string,
  description: string,
  website: string,
  link: string,
  image: string,
  images: string[],
  token: string
) {
  return fetch(`${API_URL}/v1/partner`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      id,
      title,
      description,
      website,
      link,
      image,
      images,
    }),
  });
}
