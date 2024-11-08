import React from "react";
import { Outlet } from "react-router-dom";
import MyHeader from "../component/MyHeader";
import MyFooter from "../component/MyFooter";

const Layout = () => {
  return (
    <>
      <MyHeader />
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <MyFooter />
    </>
  );
};

export default Layout;
