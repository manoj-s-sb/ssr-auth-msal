import { useMsal } from "@azure/msal-react";
import Profile from "../componets/profile";
import Dashboard from "../componets/dashboard";
import { useState } from "react";
import dynamic from "next/dynamic";
import Users from "../componets/users";

const LandingPage = () => {
  const { accounts } = useMsal(); 
  const MsalComponent = dynamic(() => import("../componets/login"), {
    ssr: false,
  });

  return (
    <div>
      <MsalComponent />
      {accounts?.length > 0 && <Users />};
    </div>
  );
};

export default LandingPage;
