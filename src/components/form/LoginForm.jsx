import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import { Bars } from "react-loader-spinner";
import { motion } from "framer-motion";

const LoginForm = ({ inputs, onSubmit, defaultValues, isLoading }) => {
  const { control, handleSubmit } = useForm({ defaultValues });

  return (
    <div className="flex flex-col justify-center items-center w-full text-white">
      {inputs.map((item, index) => (
        <FormInput
          key={index}
          input={item}
          control={control}
          rules={item?.rules}
        />
      ))}
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: "400", damping: 17 }}
        className="sm:w-[20rem] w-[80vw] my-2 h-16 bg-teal-600 rounded-lg cursor-pointer flex justify-center items-center"
        onClick={handleSubmit(onSubmit)}
      >
        {isLoading ? (
          <Bars height="32" color="white" ariaLabel="bars-loading" />
        ) : (
          <div className="text-white text-lg font-medium tracking-widest flex justify-center items-center ">
            Login
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default LoginForm;
