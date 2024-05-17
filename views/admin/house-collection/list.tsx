import {
  deleteHouseCollection,
  getHouseCollections,
} from "@/api/house-collection";
import { useAuth } from "@/context/AuthContext";
import { HouseCollectionType } from "@/types/house-collections";
import Link from "next/link";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export function HouseCollectionList() {
  const [houseCollections, setHouseCollections] = useState<
    HouseCollectionType[]
  >([]);
  const { token } = useAuth();

  function fetchHouseCollections() {
    getHouseCollections()
      .then((res) => res.json())
      .then(setHouseCollections)
      .catch(() => {
        toast.error("Failed to fetch house collections");
      });
  }

  useEffect(() => {
    fetchHouseCollections();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold">House Collection List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {houseCollections.map((collection) => (
          <div key={collection.id} className="border p-4">
            <div className="font-bold">Title:</div>
            <div>{collection.title}</div>
            <div className="font-bold">Description:</div>
            <div>{collection.link}</div>
            <div className="font-bold">Link:</div>
            <div>{collection.link}</div>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              <Link href={`/admin/house-collection/edit/${collection.id}`}>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => {
                  deleteHouseCollection(collection.id, token).then((res) => {
                    if (res.ok) {
                      toast.success("Claim deleted successfully");
                      fetchHouseCollections();
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
