export const API_URL = "https://officialnftees-api.vercel.app/api";

export async function availableNFTs(ids: string[]): Promise<string[]> {
  const res = await fetch(`${API_URL}/nftees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids }),
  });

  const data = await res.json();

  return data.nfts;
}

type Order = {
  id: string;
  signature: string;
  form: {
    address_line_one: string;
    address_line_two: string;
    city: string;
    country: string;
    email: string;
    first_name: string;
    last_name: string;
    phone: string;
    physical_size: string;
    state: string;
    zipcode: string;
  };
};

export async function createOrder(order: Order): Promise<boolean> {
  const res = await fetch(`${API_URL}/nftees/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  const data = await res.json();

  if (data.error) {
    return false;
  }

  return true;
}

export function login(username: string, password: string) {
  return fetch(`${API_URL}/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
}

export async function normalizeImage(image: File): Promise<number[]> {
  return Buffer.from(await image.arrayBuffer()).toJSON().data;
}
