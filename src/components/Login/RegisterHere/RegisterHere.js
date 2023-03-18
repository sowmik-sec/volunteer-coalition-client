import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const RegisterHere = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default RegisterHere;
