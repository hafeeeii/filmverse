import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "axios";
import { BsPlay } from "react-icons/bs";
import dayjs from "dayjs";

const Hero = () => {
  const [upcomingMovie, setupcomingMovie] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const movie = upcomingMovie[Math.floor(Math.random() * upcomingMovie.length)];
  useEffect(() => {
    axios.get(requests.requestUpcoming).then((data) => {
      setupcomingMovie(data.data.results);
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] relative text-white ">
      <div className="w-[100vw] h-full">
        <div className="absolute w-full h-[100vh] bg-gradient-to-r from-black"></div>

        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
          className="w-[100vw] h-[100vh] object-cover object-top"
        />

        <div className="absolute  top-[25%] text-4xl font-extrabold sm:ml-7 px-3 flex flex-col gap-4">
          <div>
            <h1 className="font-bold text-6xl ">{movie?.title}</h1>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-black bg-teal-600 text-sm font-medium px-4 py-2 flex items-center gap-1">
              <BsPlay size={18}/>
              Play
            </button>
            <button className=" border bg-transparent text-sm font-medium px-3 py-2">
              Watch Later
            </button>
          </div>
          <div>
            <p className="text-gray-500 text-xs font-medium mb-2">
              {dayjs(movie?.release_date).format('MMM DD YYYY')}
            </p>
            <p className="text-xs font-medium sm:w-[65%]">{movie?.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
