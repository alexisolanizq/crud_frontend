import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Header from "./Header";
import Form from "./Form";

const Layout = () => {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 flex flex-col lg:flex-row">
        <Form />
        <Outlet />
      </div>
      <ToastContainer autoClose={4000} />
    </div>
  );
};

export default Layout;
