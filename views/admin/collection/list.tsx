import { deleteClaim, getClaims } from "@/api/claim";
import { useAuth } from "@/context/AuthContext";
import { Claim } from "@/types/claim";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export function CollectionList() {
  const [claims, setClaims] = useState<Claim[]>([]);
  const { token } = useAuth();

  function fetchClaims() {
    getClaims()
      .then((res) => res.json())
      .then(setClaims)
      .catch(() => {
        toast.error("Failed to fetch claims");
      });
  }

  useEffect(() => {
    fetchClaims();
  }, []);

  // show the list of claims, in a table
  return (
    <div className="overflow-hidden">
      <h1 className="text-3xl font-semibold">Claims List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {claims.map((claim) => (
          <div key={claim.id} className="border p-4">
            <div className="font-bold">Title:</div>
            <div>{claim.title}</div>
            <div className="font-bold">Open:</div>
            <div>{claim.open}</div>
            <div className="font-bold">Eligibility:</div>
            <div>{claim.eligibility}</div>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <Link href={`/admin/collection/edit/${claim.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => {
                  deleteClaim(claim.id, token).then((res) => {
                    if (res.ok) {
                      toast.success("Claim deleted successfully");
                      fetchClaims();
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
