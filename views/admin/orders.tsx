import { getOrders } from "@/api/order";
import { useAuth } from "@/context/AuthContext";
import { Order } from "@/types/order";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    getOrders(token)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        toast.error("Failed to fetch orders");
      });
  }, [token]);

  /*
  export interface Order {
  id: string;
  nft_id: string;
  address1: string;
  address2: string;
  city: string;
  country: string;
  email: string;
  firstName: string;
  lastName: string;
  state: string;
  zip: string;
  collection: string;
  physical_size: string;
  claim_id: string;
  creation: string;
  nft: Nft;
  claim: Claim;
}

export interface Nft {
  id: string;
  address: string;
  nft: string;
  signature: string;
}

export interface Claim {
  id: string;
  contract_id: string;
  image_id: string;
  open: string;
  title: string;
  specs: string;
  care: string;
  eligibility: string;
  chart: string;
  succesful: string;
  link: string;
  open_for_claim: boolean;
  contract: Contract;
}

export interface Contract {
  id: string;
  address: string;
  chain_id: any;
  abi: any;
  name: string;
  type: string;
}

  
  */

  return (
    <div>
      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Claim</th>
            <th>Physical Size</th>
            <th>Claim ID</th>
            <th>Chain</th>
            <th>Creation</th>
          </tr>
        </thead>
        <tbody>
          {orders
            .sort((a, b) => {
              return (
                new Date(b.creation).getTime() - new Date(a.creation).getTime()
              );
            })
            .map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.claim.title}</td>
                <td className="border px-4 py-2">{order.physical_size}</td>
                <td className="border px-4 py-2">{order.claim_id}</td>
                <td className="border px-4 py-2">
                  {order.claim.contract.chain_id === "move" ? "sui" : "ftm"}{" "}
                </td>
                <td className="border px-4 py-2">{order.creation}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
