import React from "react";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import SubHeading from "./SubHeading";
import NotFound from "./NotFound";

const Recommendations = ({ id, mediaType }) => {
  const { data } = useFetch(`/${mediaType}/${id}/recommendations`);
  return (
    <div className="text-white">
      <SubHeading>Recommendations</SubHeading>
      {data?.results.length > 0 ? (
        <div className="flex overflow-x-scroll sm:h-[31rem]">
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

export default Recommendations;
