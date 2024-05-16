import AuthProvider from "@/context/AuthContext";
import { HouseCollectionCreate } from "@/views/admin/house-collection";

export default function Page() {
  return (
    <AuthProvider>
      <HouseCollectionCreate />
    </AuthProvider>
  );
}
