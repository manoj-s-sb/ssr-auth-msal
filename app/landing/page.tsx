import { useMsal } from "@azure/msal-react";
import Profile from "../componets/profile";
import Dashboard from "../componets/dashboard";
import {  useState } from "react"; 

const LandingPage = () => {

  const { accounts } = useMsal();
  
  return <div>{accounts.length > 0 ? <Profile /> : <Dashboard />}</div>;
};

export default LandingPage;
