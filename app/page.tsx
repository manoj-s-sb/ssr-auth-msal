"use client";

import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalConfig } from "./utils/authConfig";
import { PublicClientApplication } from "@azure/msal-browser"; 
import LandingPage from "./landing/page"; 
 
export default function Home() { 
  return (
    <MsalProvider instance={new PublicClientApplication(msalConfig)}>
      <LandingPage /> 
      
      
    </MsalProvider>
  );
}
