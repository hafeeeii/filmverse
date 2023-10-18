import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Details from "../components/Details";
import Trailer from "../components/Trailer";
import useFetch from "../hooks/useFetch";
import Similar from "../components/Similar";
import Recommendations from "../components/Recommendations";
import Cast from "../components/Cast";
import RelatedImg from "../components/RelatedImg";
const MovieDetail = () => {
  const { id, mediaType } = useParams();
  const { data } = useFetch(`/${mediaType}/${id}`);
  const { data: cast } = useFetch(`/${mediaType}/${id}/credits`);
  const { data: trailer } = useFetch(`/${mediaType}/${id}/videos`);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="bg-black ">
      <div className="absolute w-full h-[100vh] bg-gradient-to-t from-black"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        alt="backdrop"
        className="w-[100vw] h-[100vh] object-cover"
      />
      <div className="lg:px-48 sm:px-32 px-5">
        <Details data={data} credits={cast} />
        <Cast cast={cast} />
        <RelatedImg mediaType={mediaType} id={id} />
        <Trailer trailerData={trailer} />
        <Similar mediaType={mediaType} id={id} />
        <Recommendations mediaType={mediaType} id={id} />
      </div>
    </div>
  );
};

export default MovieDetail;
