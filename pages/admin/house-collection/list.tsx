import AuthProvider from "@/context/AuthContext";
import { HouseCollectionList } from "@/views/admin/house-collection/list";

export default function Page() {
  return (
    <AuthProvider>
      <HouseCollectionList />
    </AuthProvider>
  );
}
