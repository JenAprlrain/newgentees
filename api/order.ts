import { API_URL } from ".";

export function createOrder(
  id: string,
  signature: string,
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
  }
) {
  return fetch(`${API_URL}/v1/order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      signature,
      form,
    }),
  });
}

export function getOrder(address: string, token: string) {
  return fetch(`${API_URL}/v1/order?address=${address}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export function getOrders(token: string) {
  return fetch(`${API_URL}/v1/order`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
