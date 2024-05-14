import { useRouter } from "next/router";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import { login } from "@/api";
import toast from "react-hot-toast";

type AuthContextType = {
  token: string;
  setToken: (token: string) => void;
  login: (username: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  token: "",
  setToken: () => {},
  login: (username: string, password: string) => {},
});

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    if (
      !token &&
      router.pathname.startsWith("/admin") &&
      router.pathname !== "/admin/login"
    ) {
      router.push("/admin/login");
    }
  }, [token, router]);

  function loginImpl(username: string, password: string) {
    login(username, password).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setToken(data.token);
          router.push("/admin");
        });
      } else {
        toast.error("Invalid username or password");
      }
    });
  }

  const value = {
    token,
    setToken,
    login: loginImpl,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
