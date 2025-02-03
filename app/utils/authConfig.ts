import { PublicClientApplication } from "@azure/msal-browser";

export const msalConfig = {
  auth: {
    clientId: "2c14f19d-bd70-4cad-bab5-968f0351842f", // Replace with your Azure AD B2C Client ID
    authority: "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_SignIn", // Default authority for sign-in
    knownAuthorities: ["sbcenturycricketdev.b2clogin.com"], // Replace with your tenant name
    redirectUri: "http://localhost:3000", // Replace with your redirect URI
    postLogoutRedirectUri: "http://localhost:3000", // Replace with your post logout redirect URI

    // clientId: "d710cec4-128a-47c2-8cbe-7c37852eccaa",
    // authority:
    //   "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SIgnUp",
    // knownAuthorities: ["stancebeamcctest.b2clogin.com"],
    // redirectUri: "http://localhost:3000/dashboard",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to true if you are having issues on IE11 or Edge
  },
};

export const signInRequest = {
  scopes: [
    "openid",
    "profile",//"https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
    "https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
  ], // Include your custom scope
  authority:
     "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_SignIn", // Replace with your sign-in policy
    //"https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SignIn",
};

export const signUpRequest = {
  scopes: [
    "openid",
    "profile",
    //"https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
    "https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
  ], // Include your custom scope
  authority:
    "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_SignUp", // Replace with your sign-up policy
    //"https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SignUp",
};

export const passwordResetRequest = {
  scopes: [
    "openid",
    "profile",
    //"https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
    "https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
  ], // Include your custom scope
  authority:
   // "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_Password_Reset",
  "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_Password_Reset", // Replace with your password reset policy
};

export const profileEditRequest = {
  scopes: [
    "openid",
    "profile"
    ,//"https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
    "https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
  ], // Include your custom scope
  authority:
   // "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_Profile_Edit",
   "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_Profile_Edit", // Replace with your profile edit policy
};

export const msalInstance = new PublicClientApplication(msalConfig);

// ✅ Ensure MSAL is initialized before using it
const initializeMsal = async () => {
  if (!msalInstance.initialize) return;
  await msalInstance.initialize();
};

// Call this function before using msalInstance
initializeMsal();





// import { PublicClientApplication } from "@azure/msal-browser";

// export const msalConfig = {
//   auth: {
//     // clientId: "2c14f19d-bd70-4cad-bab5-968f0351842f", // Replace with your Azure AD B2C Client ID
//     // authority: "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_SignIn", // Default authority for sign-in
//     // knownAuthorities: ["sbcenturycricketdev.b2clogin.com"], // Replace with your tenant name
//     // redirectUri: "http://localhost:3000", // Replace with your redirect URI
//     // postLogoutRedirectUri: "http://localhost:3000", // Replace with your post logout redirect URI

//     clientId: "d710cec4-128a-47c2-8cbe-7c37852eccaa",
//     authority:
//       "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SIgnUp",
//     knownAuthorities: ["stancebeamcctest.b2clogin.com"],
//     redirectUri: "http://localhost:3000/dashboard",
//   },
//   cache: {
//     cacheLocation: "sessionStorage", // This configures where your cache will be stored
//     storeAuthStateInCookie: false, // Set this to true if you are having issues on IE11 or Edge
//   },
// };

// export const signInRequest = {
//   scopes: [
//     "openid",
//     "profile","https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
//     //"https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
//   ], // Include your custom scope
//   authority:
//     // "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_SignIn", // Replace with your sign-in policy
//     "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SignIn",
// };

// export const signUpRequest = {
//   scopes: [
//     "openid",
//     "profile","https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
//    // "https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
//   ], // Include your custom scope
//   authority:
//     // "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_SignUp", // Replace with your sign-up policy
//     "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_SignUp",
// };

// export const passwordResetRequest = {
//   scopes: [
//     "openid",
//     "profile","https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
//     //"https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
//   ], // Include your custom scope
//   authority:
//     "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_Password_Reset",
//   //"https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_Password_Reset", // Replace with your password reset policy
// };

// export const profileEditRequest = {
//   scopes: [
//     "openid",
//     "profile","https://stancebeamcctest.onmicrosoft.com/2e2ab414-7175-411b-8a5d-d11b591cbd07/api.read",
//     //"https://sbcenturycricketdev.onmicrosoft.com/ba6495f3-9f59-499a-b79d-cf23f388d378/tasks.read",
//   ], // Include your custom scope
//   authority:
//     "https://stancebeamcctest.b2clogin.com/stancebeamcctest.onmicrosoft.com/B2C_1_Profile_Edit",
//   //  "https://sbcenturycricketdev.b2clogin.com/sbcenturycricketdev.onmicrosoft.com/B2C_1_Profile_Edit", // Replace with your profile edit policy
// };

// export const msalInstance = new PublicClientApplication(msalConfig);

// // ✅ Ensure MSAL is initialized before using it
// const initializeMsal = async () => {
//   if (!msalInstance.initialize) return;
//   await msalInstance.initialize();
// };

// // Call this function before using msalInstance
// initializeMsal();
