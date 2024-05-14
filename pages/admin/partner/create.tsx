import AuthProvider from "@/context/AuthContext";
import { CreatePartner } from "@/views/admin/partner-create";

export default function Page() {
  return (
    <AuthProvider>
      <CreatePartner />
    </AuthProvider>
  );
}
