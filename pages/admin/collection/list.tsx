import AuthProvider from "@/context/AuthContext";
import { CollectionList } from "@/views/admin/collection/list";

export default function Page() {
  return (
    <AuthProvider>
      <CollectionList />
    </AuthProvider>
  );
}
