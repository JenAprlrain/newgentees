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

  return (
    <div>
      <h1 className="text-3xl font-semibold">Orders List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {orders.map((order) => (
          <div key={order.id} className="border p-4">
            <div className="font-bold">Order ID:</div>
            <div>{order.id}</div>
            <div className="font-bold">Claim:</div>
            <div>{order.claim.title}</div>
            <div className="font-bold">Physical Size:</div>
            <div>{order.physical_size}</div>
            <div className="font-bold">Claim ID:</div>
            <div>{order.claim_id}</div>
            <div className="font-bold">Chain:</div>
            <div>
              {order.claim.contract.chain_id === "move" ? "sui" : "ftm"}
            </div>
            <div className="font-bold">Creation:</div>
            <div>{order.creation}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
