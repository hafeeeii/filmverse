import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromAPI } from "../utils/fetchDataFromApi";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "../components/Card";
import { ThreeDots } from "react-loader-spinner";
import Loader from "../components/Loader";

const Search = () => {
  const { query } = useParams();
  const [pageNum, setPageNum] = useState(1);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const fetchInitialData = () => {
    setIsLoading(true);
    fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setIsLoading(false);
      }
    );
  };

  const fetchNextPageData = () => {
    fetchDataFromAPI(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
        if (data?.results) {
          setData({
            ...data,
            results: [...data.results, ...res.results],
          });
        } else {
          setData(res);
        }
        setPageNum((prev) => prev + 1);
      }
    );
  };

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [query]);

  return (
    <div className="text-white pt-40">
      {isLoading && <Loader />}

      {!isLoading &&
        (data?.results?.length > 0 ? (
          <>
            <div className="px-5 font-bold sm:text-3xl mb-4">
              {`Search ${data?.results?.length > 1 ? "results" : "result"} for`}{" "}
              <span className="text-teal-600">{query}</span>
            </div>

            <InfiniteScroll
              dataLength={data?.results?.length || []}
              hasMore={pageNum <= data?.total_pages}
              next={fetchNextPageData}
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
              <div className="flex flex-wrap justify-center">
                {data?.results.map((item, index) => {
                  if (item?.media_type === "person") return;
                  return <Card key={index} data={item} fromSearch={true} />;
                })}
              </div>
            </InfiniteScroll>
          </>
        ) : (
          <div className="h-[100vh] text-center pt-10 font-bold">Not found</div>
        ))}
    </div>
  );
};

export default Search;
