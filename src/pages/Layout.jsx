import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="h-screen flex-1">
        <Header />
        <div className="justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
