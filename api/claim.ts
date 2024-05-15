import { API_URL } from ".";

export function createClaim(
  title: string,
  specs: string,
  care: string,
  eligibility: string,
  chart: string,
  succesful: string,
  link: string,
  image: string,
  open: string,
  contract: { address: string; name: string; type: string; abi: string },
  token: string
) {
  return fetch(`${API_URL}/v1/claim`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      specs,
      care,
      eligibility,
      chart,
      succesful,
      link,
      image,
      open,
      contract,
    }),
  });
}

export function getClaim(id: string) {
  return fetch(`${API_URL}/v1/claim?id=${id}`);
}

export function getClaims() {
  return fetch(`${API_URL}/v1/claim`);
}
