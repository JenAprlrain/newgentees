import AuthProvider from "@/context/AuthContext";
import { Orders } from "@/views/admin/orders";

export default function Page() {
  return (
    <AuthProvider>
      <Orders />
    </AuthProvider>
  );
}
