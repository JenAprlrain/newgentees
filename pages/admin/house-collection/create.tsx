import AuthProvider from "@/context/AuthContext";
import { HouseCollectionCreate } from "@/views/admin/house-collection/create";

export default function Page() {
  return (
    <AuthProvider>
      <HouseCollectionCreate />
    </AuthProvider>
  );
}
