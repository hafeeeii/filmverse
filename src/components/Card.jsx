import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Genres from "./Genres";
import CircleRating from "./CircleRating";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToWatchlist, removeFromWatchlist } from "../store/watchlistSlice";
import noImg from "../assets/no-image.jpg";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import dayjs from "dayjs";
const Card = ({ data, mediaType, fromSearch }) => {
  const dispatch = useDispatch();
  const watchlist = useSelector(({ watchlistSlice }) => watchlistSlice);
  const [isClicked, setIsClicked] = useState(false);
  const { email } = useSelector(({ userSlice }) => userSlice.user);

  useEffect(() => {
    const isItemInWatchlist = watchlist.some(
      (item) => item?.data?.id === data.id
    );
    setIsClicked(isItemInWatchlist);
  }, [data, watchlist]);

  const handleAddToWatchlist = () => {
    const itemToAdd = {
      mediaType,
      data,
    };
    if (!email) {
      toast.error("You need to Login");
    } else {
      if (isClicked) {
        dispatch(removeFromWatchlist(itemToAdd));
      } else {
        dispatch(addToWatchlist(itemToAdd));
      }
    }
  };
  const truncateString = (str, limit) =>
    str.length > limit ? str.slice(0, limit) + "..." : str;

  return (
    <motion.div
      whileHover={{ scale: [null, 1.1] }}
      transition={{ duration: 0.3 }}
      className="w-[7rem] sm:w-[14rem] sm:h-[22rem] mx-2 sm:mx-3 sm:mb-20 "
    >
      <div className="w-full relative my-6 ">
        <div className="sm:w-[222px] rounded-lg overflow-hidden sm:h-[20rem]  ">
          <Link to={`/details/${mediaType || data?.media_type}/${data?.id}`}>
            {data?.poster_path ? (
              <LazyLoadImage
                src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
                alt={data?.title}
                className=" object-cover "
                effect="blur"
              />
            ) : (
              <img src={noImg} alt="no image" className="object-cover " />
            )}
          </Link>
        </div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: "400", damping: 17 }}
          className="w-fit h-fit cursor-pointer absolute inset-1 hover:text-teal-900 text-lg sm:text-3xl"
          onClick={handleAddToWatchlist}
        >
          {isClicked ? (
            <BsBookmarkHeartFill className="text-teal-900" />
          ) : (
            <BsBookmarkHeart />
          )}
        </motion.div>
        {!fromSearch && (
          <>
            <div className="absolute sm:-bottom-5 -bottom-4 left-2">
              <CircleRating rating={data?.vote_average.toFixed(1)} />
            </div>
            <div className="absolute bottom-2 right-1 hidden sm:flex w-[70%] text-center justify-end">
              <Genres data={data?.genre_ids.slice(0, 2)} />
            </div>
          </>
        )}
      </div>

      <Link
        to={`/details/${mediaType || data?.media_type}/${data?.id}`}
        className="w-full "
      >
        <h2>{truncateString(data?.title || data?.name, 25)}</h2>
        <p className="text-gray-500 text-xs font-medium mb-2">
          {dayjs(data?.release_date || data?.first_air_date).format(
            "MMM DD YYYY"
          )}
        </p>
      </Link>
    </motion.div>
  );
};

export default Card;
