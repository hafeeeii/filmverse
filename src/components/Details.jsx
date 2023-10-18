import React from "react";
import Loader from "./Loader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import dayjs from "dayjs";

const Details = ({ data, credits }) => {
  const toHours = (totalMinute) => {
    let hours = Math.floor(totalMinute / 60);
    let remainingMinutes = Math.floor(totalMinute % 60);
    return `${hours}h ${remainingMinutes > 0 ? `${remainingMinutes}m` : ""}`;
  };

  const writers = credits?.crew
    .filter((data) => data?.job === "Story")
    .map((Writer) => Writer?.name);
  const directors = credits?.crew
    .filter((data) => data?.job === "Director")
    .map((director) => director?.name);

  return (
    <div className="  text-white w-full h-full relative ">
      {data ? (
        <div className="absolute bottom-16 sm:bottom-4 transform left-1/2 -translate-x-1/2 ">
          <div className="sm:flex w-full gap-6">
            <div className="min-w-[13rem] lg:min-w-[17rem]  ">
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt={data?.title}
                className="w-full rounded-2xl hidden sm:block"
                effect="blur"
              />
            </div>
            <div className="w-full">
              <div className="sm:px-4 flex flex-col gap-5 w-[85vw] sm:w-[60vw]">
                <h1 className="text-5xl font-bold  text-white">
                  {data?.title || data?.name}
                </h1>
                <p className="text-xs font-bold  text-gray-300 -mt-2 ">
                  "{data?.tagline || null}"
                </p>
                <div className="flex gap-3 flex-wrap">
                  {data?.genres?.map((data, index) => (
                    <h3
                      key={index}
                      className="text-xs font-bold  text-white border py-2 rounded-full px-4 "
                    >
                      {data?.name}
                    </h3>
                  ))}
                </div>
                <p className="text-xs font-bold  text-gray-200 ">
                  {data?.overview || null}
                </p>
                <div>
                  <div className="flex gap-5 sm:gap-8 font-bold flex-wrap">
                    <h3>
                      Stauts:{" "}
                      <span className="text-gray-300 font-medium">
                        {data?.status}
                      </span>
                    </h3>
                    <h3>
                      Release Date:{" "}
                      <span className="text-gray-300 font-medium">
                        {dayjs(
                          data?.release_date || data?.first_air_date
                        ).format("MMM DD YYYY")}
                      </span>
                    </h3>
                    <h3>
                      Runtime:{" "}
                      <span className="text-gray-300 font-medium">
                        {toHours(data?.runtime)}
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-6 items-center">
                  <h3>
                    Director:{" "}
                    {directors?.map((director, index) => (
                      <span>
                        {" "}
                        {director}
                        {index < directors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </h3>
                  <h2>
                    Writer:
                    {writers?.map((writer, index) => (
                      <span>
                        {" "}
                        {writer}
                        {index < writers.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Details;
