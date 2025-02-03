import {
  InteractionRequiredAuthError,
  PublicClientApplication,
} from "@azure/msal-browser";
import { signInRequest } from "./authConfig";

export const getAccessToken = async ({ instance, account }: any) => {
  console.log("Trying to fetch all accounts");
  const accounts = instance.getAllAccounts();
  console.log(accounts, "accounts");

  if (accounts.length <= 0) {
    console.error("No accounts found. Redirecting to sign-in.");
    throw new Error("No accounts found");
  }

  try {
    // Handle redirect promise (if returning from a redirect)
    const authResponse = await instance.handleRedirectPromise();
    if (authResponse) {
      console.log("Auth response from redirect:", authResponse);
      instance.setActiveAccount(authResponse.account);
    }

    // Get the active account or fallback to the first account
    const activeAccount = instance.getActiveAccount() || accounts[0];
    console.log("Active account:", activeAccount);

    if (!activeAccount) {
      console.error("No active account. Redirecting to sign-in.");
      instance.loginRedirect(signInRequest);
      return; // Stop further execution
    }

    try {
      // Attempt to acquire token silently
      const response = await instance.acquireTokenSilent({
        scopes: [
          "https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
        ],
        account: activeAccount,
      });
      console.log("fetched token");
      console.log("Access token response:", response);

        // if (!response.accessToken) {
        //   console.error("Access token is empty. Redirecting to login.");
        //   instance.loginRedirect(signInRequest);
        //   return;
        // }

      localStorage.setItem("accessToken", response.accessToken);
      localStorage.setItem(
        "expiresOn",
        response.expiresOn ? response.expiresOn.toString() : ""
      );

      return response.accessToken;
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        console.error(
          "Silent token acquisition failed, redirecting to login.",
          error
        );
      //  instance.loginRedirect(signInRequest);
      } else {
        console.error("Unexpected error during token acquisition:", error);
        throw error;
      }
    }
  } catch (error) {
    console.error("Error handling redirect promise:", error);
    throw error;
  }

  return undefined; // Return undefined if no token is acquired
};
