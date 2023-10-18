import React, { useEffect } from "react";
import ExploreContent from "../components/ExploreContent";
import { useLocation } from "react-router-dom";

const Explore = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="w-full h-full">
      <ExploreContent />
    </div>
  );
};

export default Explore;
