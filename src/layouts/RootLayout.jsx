import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const RootLayout = () => {
  const hide = useSelector((state) => state.router.hide);

  return (
    <div>
      <NavBar hide={hide} />
      <Outlet />
      <Footer hide={hide} />
    </div>
  );
};

export default RootLayout;
