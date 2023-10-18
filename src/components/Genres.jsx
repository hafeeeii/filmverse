import React from "react";
import { useSelector } from "react-redux";

const Genres = ({ data }) => {
  const genres = useSelector(({ homeSlice }) => homeSlice.genres);
  return (
    <div className="flex gap-1 flex-nowrap flex-row items-center">
      {data?.map((g) =>
        !genres[g]?.name ? null : (
          <div
            key={g}
            className="text-xs bg-teal-900 hover:bg-teal-950 px-2 py-1 rounded-full"
          >
            {genres[g]?.name}
          </div>
        )
      )}
    </div>
  );
};

export default Genres;
