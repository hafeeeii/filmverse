import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import { sortbyData } from "../utils/constants";
import { fetchDataFromAPI } from "../utils/fetchDataFromApi";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import { ThreeDots } from "react-loader-spinner";
import Loader from "./Loader";

let filters = {};
const ExploreContent = () => {
  const { mediaType } = useParams();
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { data: genresData } = useFetch(`/genre/${mediaType}/list`);

  const [page, setPage] = useState(1);
  const initialData = () => {
    setIsLoading(true);
    fetchDataFromAPI(`/discover/${mediaType}`, filters).then((res) => {
      setIsLoading(false);
      setData(res);
      setPage((prev) => prev + 1);
    });
  };
  useEffect(() => {
    filters = {};
    initialData();
    setGenre(null)
    setSortby(null)
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
    if (action.name === "sortby") {
      setSortby(selectedItems);
      if (action.action !== "clear") {
        filters.sort_by = selectedItems.value;
      } else {
        delete filters.sort_by;
      }
    }

    if (action.name === "genres") {
      setGenre(selectedItems);
      if (action.action !== "clear") {
        let genreId = selectedItems.map((g) => g.id);
        genreId = JSON.stringify(genreId).slice(1, -1);
        filters.with_genres = genreId;
      } else {
        delete filters.with_genres;
      }
    }

    setPage(1);
    initialData();
  };

  const fetchNextPageData = () => {
    fetchDataFromAPI(`/discover/${mediaType}?page=${page}`, filters).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPage((prev) => prev + 1);
      }
    );
  };

  return (
    <div className="text-white py-[8rem]">
      {isLoading && <Loader />}
      {!isLoading &&
        (data?.results?.length > 0 ? (
          <>
          <div className="px-10 font-bold text-3xl">
            Explore <span className="text-teal-600 ">
            {mediaType === 'tv' ? 'TV Shows' : 'Movies'}
            </span>
          </div>
            <div className="p-[2rem] flex sm:flex-row gap-3 flex-col justify-end">
              <Select
                name="genres"
                className="sm:min-w-[14rem]  text-black "
                placeholder="Select genres"
                options={genresData?.genres}
                onChange={onChange}
                isMulti
                classNamePrefix="select"
                getOptionLabel={(options) => options.name}
                getOptionValue={(options) => options.id}
                value={genre}
                isClearable={true}
              />
              <Select
                name="sortby"
                className="sm:min-w-[14rem] text-black  "
                placeholder="Sort by"
                options={sortbyData}
                onChange={onChange}
                classNamePrefix="select"
                isClearable={true}
                value={sortby}
              />
            </div>

            <InfiniteScroll
              dataLength={data?.results?.length || []}
              next={fetchNextPageData}
              hasMore={page <= data?.total_pages}
              loader={
                <ThreeDots
                  color="white"
                  wrapperStyle={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                />
              }
            >
              <div className=" flex flex-wrap justify-center">
                {data?.results?.map((data, index) => (
                  <div key={index}>
                    <Card data={data} mediaType={mediaType} />
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </>
        ) : (
          <div className="h-[100vh] text-center pt-10 font-bold">
            Not found!
          </div>
        ))}
    </div>
  );
};

export default ExploreContent;
