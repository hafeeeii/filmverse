import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Card from "./Card";
import SubHeading from "./SubHeading";

const Row = ({ title, requests }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(requests).then((data) => setMovies(data.data.results));
  }, [requests]);

  return (
    <div className="text-white ">
      {movies.length > 0 ? (
        <div>
          <div className="px-5">
            <SubHeading>{title}</SubHeading>
          </div>
          <div className="px-4 flex overflow-x-scroll sm:h-[31rem]">
            {movies?.map((movie, index) => (
              <div key={index}>
                <Card data={movie} mediaType="movie" />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Row;
