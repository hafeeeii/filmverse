import React from "react";

const SubHeading = ({ children }) => {
  return (
    <h2 className="text-teal-500 text-2xl sm:text-3xl  sm:mt-2 sm:py-7 py-2 font-medium ">
      {children}
    </h2>
  );
};

export default SubHeading;
