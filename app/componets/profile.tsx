"use client"
import { useMsal } from "@azure/msal-react";
import { profileEditRequest, passwordResetRequest } from "../utils/authConfig";
import { useEffect, useState } from "react";
import { msalInstance } from "../utils/authConfig";
import { getAccessToken } from "../utils/tokenConfig";

const Profile = () => {
  const { instance, accounts } = useMsal();
  const [accessToken, setAccessToken] = useState(null);
  console.log(typeof window !== "undefined" ? "CSR" : "SSR");

  const handleProfileEdit = async () => {
    await instance
      .loginRedirect(profileEditRequest)
      .then(() => {
        console.log("Profile Detail Fetched Succesfully");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleResetPassword = async () => {
    await instance
      .loginRedirect(passwordResetRequest)
      .then(() => {
        console.log("Clicked Password Reset");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleLogout = async () => {
    await instance.logoutRedirect().catch((e) => {
      console.error(e);
    });
    instance.clearCache();
  };

  useEffect(() => {
    if (accounts?.length > 0) {
      const fetchToken = async () => {
        try {
          console.log("Fetching access token...");

          // ✅ Ensure MSAL is initialized
          await msalInstance.initialize();

          // ✅ Fetch the access token
          const token = await getAccessToken({ instance: msalInstance });

          if (token) {
            setAccessToken(token);
          }
        } catch (err) {
          console.error("Error fetching access token:", err);
        }
      };
      setTimeout(() => {
        fetchToken();
      }, 1000);
    }
  }, [accounts]); // Runs only once when the component mounts

  return (
    <>
      <div className="flex items-center justify-center h-full bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-black">
            Profile Management
          </h1>
          <h1 className="mb-4 ext-2xl font-bold mb-4 text-black">
            Hi, {accounts?.[0]?.name} - Email: {accounts?.[0]?.username}
          </h1>
          <button
            className="auth-button edit-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleProfileEdit}
          >
            Edit Profile
          </button>
          <button
            className="auth-button reset-button bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-4"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
          <button
            className="auth-button logout-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>  
      
       
    </>
  );
};

export default Profile;
