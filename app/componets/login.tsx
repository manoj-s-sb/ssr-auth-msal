import { useMsal } from "@azure/msal-react";
import Profile from "../componets/profile";
import Dashboard from "../componets/dashboard";

const Login = () => {
  const { accounts } = useMsal();

  // const isClient = typeof window !== "undefined";

  return (
    <div className="bg-white text-black p-5 h-screen flex flex-col items-center justify-center">
      {/* {isClient ? (
        <p>This Login component is running in the browser (client-side).</p>
      ) : (
        <p>This Login component is running on the server (server-side).</p>
      )} */}
      <div className="mt-4">{accounts.length > 0 ? <Profile /> : <Dashboard />}</div>
    </div>
  );
};

export default Login;
