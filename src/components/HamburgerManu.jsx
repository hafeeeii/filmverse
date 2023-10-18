import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { clsx } from "clsx";
import { FaTimes } from "react-icons/fa";
import useAuthentication from "../hooks/useAuthentication";
import { useSelector } from "react-redux";

const HamburgerManu = () => {
  const { signOutCall } = useAuthentication();

  const user = useSelector(({ userSlice }) => userSlice.user);
  const signOut = async () => {
    await signOutCall();
  };
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex">
      <div  className={`${isOpen ? 'hamburgerMenu ' : 'hidden lg:flex'}`}>
        <Link
          to={"/"}
          className="font-medium lg:text-gray-300 lg:hover:text-teal-500 lg:mr-4"
        >
          Home
        </Link>
        <Link
          to={"/explore/movie"}
          className="font-medium lg:text-gray-300 lg:hover:text-teal-500 lg:mr-4"
        >
          Movies
        </Link>
        <Link
          to={"/explore/tv"}
          className="font-medium  lg:text-gray-300 lg:hover:text-teal-500 "
          onClick={closeMenu}
        >
          TV shows
        </Link>
        <Link
          to={"/watchlist"}
          className="font-medium  lg:text-gray-300 lg:hover:text-teal-500 lg:mx-4"
          onClick={closeMenu}
        >
          WatchList
        </Link>

        {user?.email ? (
          <>
            <Link className="font-medium lg:text-gray-300 lg:hover:text-teal-500 lg:mr-7 cursor-pointer">
              Account
            </Link>
            <button
              className="bg-teal-600 text-white font-medium px-2 py-1 cursor-pointer "
              onClick={signOut}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to={"/login"}
              className="font-medium lg:text-gray-300 lg:hover:text-teal-500  lg:mr-7"
              onClick={closeMenu}
            >
              Login
            </Link>

            <Link
              onClick={closeMenu}
              to={"/signup"}
              className="bg-teal-600 text-white font-medium px-2 py-1"
            >
              Sign Up
            </Link>
          </>
        )}

        <FaTimes
          className={`${closeMenu ? 'closeBtn' : ''}`}
          onClick={closeMenu}
        />
      </div>
      <div className="lg:hidden">
        <MdMenu size={23} onClick={openMenu} />
      </div>
    </div>
  );
};

export default HamburgerManu;
