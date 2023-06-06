import { Outlet } from "react-router-dom";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";

const Layout = () => {
  return (
    <div>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <div className="h-screen flex-1">
          <Header />
          <div className="justify-center items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
