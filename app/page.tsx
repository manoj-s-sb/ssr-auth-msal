import MyComponent from "./componets/dummy";
import MsalWrapper from "./landing/msalWrapper";

export default function Home() {
  return (
    <>
      <MsalWrapper />    {/* Client Side Rendering */}
      {/* <MyComponent />   Server Side Rendering */}
    </>
  );
}
