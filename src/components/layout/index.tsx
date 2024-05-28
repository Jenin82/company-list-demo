import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../navbar";

const Layout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: "100vw" }}>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;