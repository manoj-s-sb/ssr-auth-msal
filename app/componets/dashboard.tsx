import { useMsal } from "@azure/msal-react";
import { signInRequest, signUpRequest } from "../utils/authConfig";
import { ReactElement, useState } from "react";

const Dashboard = (): ReactElement => {
  const { instance } = useMsal();
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);

  const handleSignIn = async () => {
    setLoadingSignIn(true);
    try {
      await instance.loginRedirect(signInRequest);
      console.log("Logged In Successfully");
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSignIn(false);
    }
  };

  const handleSignUp = async () => {
    setLoadingSignUp(true);
    try {
      await instance.loginRedirect(signUpRequest);
      console.log("Successfully Signed Up");
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSignUp(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full w-[800px]">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to Century Cricket App
        </h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              Have an account?
            </h2>
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleSignIn}
              disabled={loadingSignIn}
            >
              {loadingSignIn ? "Signing In..." : "Sign In"}
            </button>
          </div>

          <div className="border-t border-gray-300 pt-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">
              New here?
            </h2>
            <button
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              onClick={handleSignUp}
              disabled={loadingSignUp}
            >
              {loadingSignUp ? "Creating Account..." : "Create Account"}
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          By signing in or creating an account, you agree to our Terms of
          Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
