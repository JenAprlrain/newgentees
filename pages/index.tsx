import { getCollections } from "@/chains/sui";
import { Landing } from "@/views/landing";

export default function Page() {
  getCollections(
    "0xa5b1611d756c1b2723df1b97782cacfd10c8f94df571935db87b7f54ef653d66"
  );
  return <Landing />;
}
