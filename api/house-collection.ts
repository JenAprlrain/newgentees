import { API_URL } from ".";

export function createHouseCollection(
  title: string,
  description: string,
  website: string,
  link: string,
  image: string,
  type: string,
  contract: {
    address: string;
    name: string;
    type: string;
    abi?: string;
  },
  token: string
) {
  return fetch(`${API_URL}/v1/house_collection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      description,
      website,
      link,
      image,
      type,
      contract,
    }),
  });
}

export function getHouseCollection(id: string) {
  return fetch(`${API_URL}/v1/house_collection?id=${id}`);
}

export function listHouseCollections() {
  return fetch(`${API_URL}/v1/house_collection`);
}
