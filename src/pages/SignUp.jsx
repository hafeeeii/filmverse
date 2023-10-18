import React, { useEffect } from "react";
import {
  DEFAULT_FORM_VALUES,
  SIGN_IN_FORM_INPUTS_ARRAY,
} from "../utils/constants";
import useAuthentication from "../hooks/useAuthentication";
import LoginForm from "../components/form/LoginForm";
import { Link, useLocation } from "react-router-dom";

const SignUp = () => {
  const { isLoading, signUpCall } = useAuthentication();
  const onSubmit = async (data) => {
    await signUpCall({ email: data?.Email, password: data?.Password });
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center flex-col">
      <p className="mb-3 text-2xl font-extrabold tracking-widest uppercase text-center text-white">
        Create Account
      </p>
      <LoginForm
        inputs={SIGN_IN_FORM_INPUTS_ARRAY}
        defaultValues={DEFAULT_FORM_VALUES.SIGN_IN}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
      <Link
        to={"/login"}
        className="text-gray-300 text-sm tracking-widest mt-2 cursor-pointer"
      >
        Already have an account?
      </Link>
    </div>
  );
};

export default SignUp;
