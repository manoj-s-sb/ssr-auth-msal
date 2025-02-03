import { useMsal } from "@azure/msal-react";
import Profile from "../componets/profile";
import Dashboard from "../componets/dashboard";
import { useEffect, useState } from "react";
import { msalInstance } from "../utils/authConfig";
import { getAccessToken } from "../utils/tokenConfig";

const LandingPage = () => {
  const [accessToken, setAccessToken] = useState(null);
  useEffect(() => {
    const fetchToken = async () => {
      try {
        console.log("Fetching access token...");

        // ✅ Ensure MSAL is initialized
        await msalInstance.initialize();

        // ✅ Fetch the access token
        const token = await getAccessToken({ instance: msalInstance });

        if (token) {
          console.log("Access Token:", token);
          setAccessToken(token);
        }
      } catch (err) {
        console.error("Error fetching access token:", err);
      }
    };
setTimeout(()=>{ fetchToken()},2000)
    
  }, []); // Runs only once when the component mounts

  const { accounts } = useMsal();

  console.log(accessToken, "accesstoke form landing");
  return <div>{accounts.length > 0 ? <Profile /> : <Dashboard />}</div>;
};

export default LandingPage;
