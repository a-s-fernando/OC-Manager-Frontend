import OurNav from "./Navbar";
import { Outlet } from "react-router-dom";

function RootContainer() {
  return (
    <>
      <OurNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootContainer;
