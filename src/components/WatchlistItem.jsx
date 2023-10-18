import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
const WatchlistItem = () => {
  const item = useSelector(({ watchlistSlice }) => watchlistSlice);

  return (
    <div className="text-white pt-20 sm:px-10 ">
      <h4 className="font-bold uppercase text-center text-2xl mb-4 text-teal-500 ">
        Watchlist Items
      </h4>
      {item.length > 0 ? (
        <div className="flex flex-wrap ">
          {item.map(({ mediaType, data }) => (
            <div key={data?.id} className="mb-10">
              <Card mediaType={mediaType} data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[100vh] text-center pt-10 font-bold">
          No watchlist found
        </div>
      )}
    </div>
  );
};

export default WatchlistItem;
