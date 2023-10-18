import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SubHeading from "./SubHeading";
import avatar from "../assets/avatar.png";
const Cast = ({ cast }) => {
  return (
    <div>
      <SubHeading>Cast</SubHeading>
      <div className="flex overflow-x-scroll whitespace-nowrap gap-2 text-center text-white">
        {cast?.cast?.map((data, index) => (
          <div key={index}>
            <div className="  rounded-full w-[8rem] h-[8rem] sm:w-[10rem] sm:h-[10rem] object-cover overflow-hidden">
              {data?.profile_path ? (
                <LazyLoadImage
                  src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
                  alt={data?.name}
                  effect="blur"
                />
              ) : (
                <img src={avatar} alt="cast" />
              )}
            </div>
            <h2 className="text-xs my-2">{data?.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
