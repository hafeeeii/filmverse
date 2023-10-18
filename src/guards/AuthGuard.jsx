import React, { Children } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const user = useSelector(({ userSlice }) => userSlice.user);
  if (!user.email) {
    toast.error("Sorry , you need to login");

    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default AuthGuard;
