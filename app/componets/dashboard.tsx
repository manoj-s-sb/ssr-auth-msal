import { useMsal } from "@azure/msal-react";
import { signInRequest, signUpRequest } from "../utils/authConfig";
import { ReactElement, useState } from "react";
import { motion } from "framer-motion";

const Dashboard = (): ReactElement => {
  const { instance } = useMsal();
  const [loadingSignIn, setLoadingSignIn] = useState(false);
  const [loadingSignUp, setLoadingSignUp] = useState(false);

  const handleSignIn = async () => {
    setLoadingSignIn(true);
    try {
      await instance.loginPopup(signInRequest);
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
      await instance.loginPopup(signUpRequest);
      console.log("Successfully Signed Up");
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSignUp(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <motion.h1
        className="text-6xl font-extrabold mb-8 drop-shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Century Cricket App
      </motion.h1>

      <div className="flex space-x-8">
        <button
          onClick={handleSignIn}
          className="px-8 py-4 text-lg bg-blue-600 text-white font-bold rounded-full shadow-xl hover:bg-blue-700 transition-all"
          disabled={loadingSignIn}
        >
          {loadingSignIn ? "Loging In..." : "Log In"}
        </button>
        <button
          onClick={handleSignUp}
          className="px-8 py-4 text-lg bg-green-500 text-white font-bold rounded-full shadow-xl hover:bg-green-600 transition-all"
          disabled={loadingSignUp}
        >
          {loadingSignUp ? "Creating Account..." : "Create Account"}
        </button>
      </div>
    </div>

    

    // <div className="flex items-center justify-center h-screen bg-gray-100">
    //   <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
    //     <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
    //       Welcome to Century Cricket App
    //     </h1>

    //     <div className="space-y-6">
    //       <div>
    //         <h2 className="text-2xl font-semibold mb-2 text-gray-700">
    //           Have an account?
    //         </h2>
    //         <button
    //           className={`w-full text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform focus:outline-none ${loadingSignIn ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}

    //           disabled={loadingSignIn}
    //         >
    //           {loadingSignIn ? "Signing In..." : "Sign In"}
    //         </button>
    //       </div>

    //       <div className="border-t border-gray-300 pt-6">
    //         <h2 className="text-2xl font-semibold mb-2 text-gray-700">
    //           New here?
    //         </h2>
    //         <button
    //           className={`w-full text-white px-4 py-2 rounded-md transition duration-300 ease-in-out transform focus:outline-none ${loadingSignUp ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'}`}
    //           onClick={handleSignUp}
    //           disabled={loadingSignUp}
    //         >
    //           {loadingSignUp ? "Creating Account..." : "Create Account"}
    //         </button>
    //       </div>
    //     </div>

    //     <p className="mt-8 text-center text-sm text-gray-600">
    //       By signing in or creating an account, you agree to our Terms of
    //       Service and Privacy Policy.
    //     </p>
    //   </div>
    // </div>
  );
};

export default Dashboard;
