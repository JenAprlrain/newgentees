import { deletePartner, getPartners } from "@/api/partner";
import { useAuth } from "@/context/AuthContext";
import { Partner } from "@/types/partner";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function PartnerList() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const { token } = useAuth();

  function fetchPartners() {
    getPartners()
      .then((res) => res.json())
      .then(setPartners)
      .catch(() => {
        toast.error("Failed to fetch partners");
      });
  }

  useEffect(() => {
    fetchPartners();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">Partner List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {partners.map((partner) => (
          <div key={partner.id} className="border p-4">
            <div className="font-bold">Title:</div>
            <div>{partner.title}</div>
            <div className="font-bold">Description:</div>
            <div>{partner.link}</div>
            <div className="font-bold">Website:</div>
            <div>{partner.website}</div>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <Link href={`/admin/collection/edit/${partner.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => {
                  deletePartner(partner.id, token).then((res) => {
                    if (res.ok) {
                      toast.success("Claim deleted successfully");
                      fetchPartners();
                    } else {
                      toast.error("Failed to delete claim");
                    }
                  });
                }}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
