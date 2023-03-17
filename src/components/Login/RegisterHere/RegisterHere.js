import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Register from "../Register/Register";

const RegisterHere = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RegisterHere;
