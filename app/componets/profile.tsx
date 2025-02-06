"use client";
import { useMsal } from "@azure/msal-react";
import { profileEditRequest, passwordResetRequest } from "../utils/authConfig";
import { useEffect, useState } from "react";
import { msalInstance } from "../utils/authConfig";
import { getAccessToken } from "../utils/tokenConfig";

const Profile = () => {
  const { instance, accounts } = useMsal();
  const [, setAccessToken] = useState<string | undefined>("");
  const [loading, setLoading] = useState<{ action: "edit" | "reset" | "logout" | null }>({ action: null });

  console.log(typeof window !== "undefined" ? "CSR" : "SSR");

  const handleProfileEdit = async () => {
    setLoading({ action: "edit" });
    await instance.loginRedirect(profileEditRequest);
  };

  const handleResetPassword = async () => {
    setLoading({ action: "reset" });
    await instance.loginRedirect(passwordResetRequest);
  };

  const handleLogout = async () => {
    setLoading({ action: "logout" });
    await instance.loginRedirect();
    instance.clearCache();
  };

  console.log(loading,'loading')

  useEffect(() => {
    if (accounts?.length > 0) {
      const fetchToken = async () => {
        try {
          console.log("Fetching access token...");
          await msalInstance.initialize();
          const token = await getAccessToken(msalInstance);
          if (token) {
            setAccessToken(token);
          }
        } catch (err) {
          console.error("Error fetching access token:", err);
        }
      };
      setTimeout(fetchToken, 1000);
    }
  }, [accounts]);

  return (
    <>






      <div className="flex items-center justify-center h-full bg-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-black">
            Profile Management
          </h1>
          <h1 className="mb-4 text-2xl font-bold text-black">
            Hi, {accounts?.[0]?.name} - Email: {accounts?.[0]?.username}
          </h1>
          <button
            className="auth-button edit-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleProfileEdit}
            disabled={loading.action !== null}
          >
            {loading.action === "edit" ? "Editing..." : "Edit Profile"}
          </button>
          <button
            className="auth-button reset-button bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ml-4"
            onClick={handleResetPassword}
            disabled={loading.action !== null}
          >
            {loading.action === "reset" ? "Resetting..." : "Reset Password"}
          </button>
          <button
            className="auth-button logout-button bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-4"
            onClick={handleLogout}
            disabled={loading.action !== null}
          >
            {loading.action === "logout" ? "Logging out..." : "Logout"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
