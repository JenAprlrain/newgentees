import AuthProvider from "@/context/AuthContext";
import { CreateCollection } from "@/views/admin/collection-create";

export default function Page() {
  return (
    <AuthProvider>
      <CreateCollection />
    </AuthProvider>
  );
}
