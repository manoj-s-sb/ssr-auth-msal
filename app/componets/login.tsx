import { useMsal } from "@azure/msal-react";
import Profile from "../componets/profile";
import Dashboard from "../componets/dashboard";

const Login = () => {
  const { accounts } = useMsal();
  console.log(typeof window !== "undefined" ? "CSR" : "SSR");

  return <div>{accounts.length > 0 ? <Profile /> : <Dashboard />}</div>;
};

export default Login;
