import React from "react";
import Loader from "./Loader";
import SubHeading from "./SubHeading";
import NotFound from "./NotFound";

const Trailer = ({ trailerData}) => {
  if (!trailerData) return <Loader />;
  const trailer = trailerData?.results?.find(
    (item) => item?.type === "Trailer" && item?.official === true
  );

  return (
    <div className="video w-full mb-4  ">
      <SubHeading>Trailer</SubHeading>
      {trailerData && trailer ? (
        <div>
          <div>
            <iframe
              className="w-full h-[50vw] "
              title="Youtube player"
              sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
              src={`https://youtube.com/embed/${trailer?.key}?autoplay=0`}
            ></iframe>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
