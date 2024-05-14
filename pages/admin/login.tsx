import AuthProvider from "@/context/AuthContext";
import { AdminHomePage } from "@/views/admin";
import { Login } from "@/views/admin/login";

export default function Page() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
