import AuthProvider from "@/context/AuthContext";
import { PartnerList } from "@/views/admin/partner/list";

export default function Page() {
  return (
    <AuthProvider>
      <PartnerList />
    </AuthProvider>
  );
}
