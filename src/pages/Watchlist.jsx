import React, { useEffect } from "react";
import WatchlistItem from "../components/WatchlistItem";
import { useLocation } from "react-router-dom";

const Watchlist = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <WatchlistItem />
    </div>
  );
};

export default Watchlist;
