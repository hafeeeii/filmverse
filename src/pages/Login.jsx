import React, { useEffect } from "react";
import LoginForm from "../components/form/LoginForm";
import {
  DEFAULT_FORM_VALUES,
  SIGN_IN_FORM_INPUTS_ARRAY,
} from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const Login = () => {
  const { isLoading, signInCall } = useAuthentication();
  const onSubmit = async (data) => {
    await signInCall({ email: data?.Email, password: data?.Password });
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <p className="mb-3 text-2xl font-extrabold tracking-widest uppercase text-center text-white">
        User Login
      </p>
      <LoginForm
        inputs={SIGN_IN_FORM_INPUTS_ARRAY}
        defaultValues={DEFAULT_FORM_VALUES.SIGN_IN}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
      <Link
        to={"/signup"}
        className="text-gray-300 text-sm tracking-widest mt-2 cursor-pointer"
      >
        Create Account
      </Link>
    </div>
  );
};

export default Login;
