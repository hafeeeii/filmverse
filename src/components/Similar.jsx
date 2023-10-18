import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import SubHeading from "./SubHeading";
import NotFound from "./NotFound";

const Similar = ({ id, mediaType }) => {
  const [type, setType] = useState(
    mediaType === "movie" ? "Movies" : "TV Shows"
  );
  const { data } = useFetch(`/${mediaType}/${id}/similar`);

  return (
    <div className="text-white">
      <SubHeading>Similar {type}</SubHeading>
      {data?.results.length > 0 ? (
        <div className=" flex overflow-x-scroll sm:h-[31rem]">
          {data?.results.map((data) => (
            <div key={data.id}>
              <Card data={data} mediaType={mediaType} id={id} />
            </div>
          ))}
        </div>
      ) : (
       <NotFound/>
      )}
    </div>
  );
};

export default Similar;
