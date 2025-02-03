"use client";

import { MsalProvider, useMsal } from "@azure/msal-react";
import { msalConfig } from "./utils/authConfig";
import { PublicClientApplication } from "@azure/msal-browser";
import dynamic from "next/dynamic";
import Dashboard from "./componets/dashboard";

const MsalComponent = dynamic(() => import("./landing/page"), {
  ssr: false,
}); 

export default function Home() {
  return (
    <MsalProvider instance={new PublicClientApplication(msalConfig)}>
      <MsalComponent /> 
    </MsalProvider>
  );
}
