import AuthProvider from "@/context/AuthContext";
import { AdminHomePage } from "@/views/admin";

export default function Page() {
  return (
    <AuthProvider>
      <AdminHomePage />
    </AuthProvider>
  );
}
