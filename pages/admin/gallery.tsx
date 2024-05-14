import AuthProvider from "@/context/AuthContext";
import { Gallery } from "@/views/admin/gallery";

export default function Page() {
  return (
    <AuthProvider>
      <Gallery />
    </AuthProvider>
  );
}
