import { useMsal } from "@azure/msal-react";
import { signInRequest, signUpRequest } from "../utils/authConfig";

const Dashboard = () => {
  const { instance } = useMsal();

  const handleSignIn = async () => {
    await instance
      .loginRedirect(signInRequest)
      .then(() => {
        console.log("Loggin Succesfully");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const handleSignUp = async () => {  
    await instance
      .loginRedirect(signUpRequest)
      .then(() => {
        console.log("Succesfully Logout");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Hi Please signin if u have account</h1>
        <button className="auth-button signin-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleSignIn}>
          Sign In
        </button>
        <h1 className="text-2xl font-bold mb-4 text-black mt-4">or create a new account</h1>
        <button className="auth-button signup-button bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-4" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
