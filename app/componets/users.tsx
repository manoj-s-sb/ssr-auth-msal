"use client"
import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";
import { msalInstance } from "../utils/authConfig";
import { getAccessToken } from "../utils/tokenConfig";

const Users = () => {
  const { accounts } = useMsal();
  console.log(typeof window !== "undefined" ? "user CSR" : "user SSR");
  console.log(typeof window)

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
            console.log("Access from user ======>", token);
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
    <div className="bg-gray-100 min-h-[400px] p-5">
      <h1 className="text-2xl font-bold mb-4 text-black">User List</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Email</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">1</td>
            <td className="py-3 px-6">John Doe</td>
            <td className="py-3 px-6">john@example.com</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">2</td>
            <td className="py-3 px-6">Jane Smith</td>
            <td className="py-3 px-6">jane@example.com</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">3</td>
            <td className="py-3 px-6">Robert Brown</td>
            <td className="py-3 px-6">robert@example.com</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">4</td>
            <td className="py-3 px-6">Emily Davis</td>
            <td className="py-3 px-6">emily@example.com</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6">5</td>
            <td className="py-3 px-6">Michael Wilson</td>
            <td className="py-3 px-6">michael@example.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
