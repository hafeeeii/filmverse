import React from "react";
import SubHeading from "./SubHeading";
import useFetch from "../hooks/useFetch";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import NotFound from "./NotFound";

const RelatedImg = ({ mediaType, id }) => {
  const { data } = useFetch(`/${mediaType}/${id}/images`);

  return (
    <div>
      <SubHeading>Backdrops</SubHeading>
      <div className="flex overflow-x-scroll justify-center">
        {data?.backdrops.length > 0 ? (
          data?.backdrops.map(({ file_path }, index) => (
            <div key={index}>
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500/${file_path}`}
                effect="blur"
                className=" min-w-[21rem] "
              />
            </div>
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default RelatedImg;
