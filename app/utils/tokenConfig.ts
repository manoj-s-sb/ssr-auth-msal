import {
  InteractionRequiredAuthError,
} from "@azure/msal-browser";
import { signInRequest } from "./authConfig";

export const getAccessToken = async ({ instance }: any) => {
  console.log("Trying to fetch all accounts");
  const accounts = instance.getAllAccounts(); 

  if (accounts.length === 0) {
    console.log("No accounts found. Redirecting to sign-in.");
  }

  try {
    // Handle redirect promise (if returning from a redirect)
    const authResponse = await instance.handleRedirectPromise();
    if (authResponse) { 
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
          "https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
        ],
        account: activeAccount,
      });
      console.log("fetched token",response.accessToken);  

      //   if (!response.accessToken) {
      //     console.error("Access token is empty. Redirecting to login.");
      //     instance.loginRedirect(signInRequest);
      //     return;
      //   }

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
        instance.loginRedirect(signInRequest);
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
