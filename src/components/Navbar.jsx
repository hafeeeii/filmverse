import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import HamburgerManu from "./HamburgerManu";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    if (event.key === "Enter" && search?.length > 0) {
      navigate(`/search/${search}`);
    }
  };
  const handleSearchClick = () => {
    if (search?.length > 0) {
      navigate(`/search/${search}`);
    }
  };

  return (
    <nav className="h-14 fixed z-[999] flex justify-between items-center  w-full text-teal-600 p-3 pt-7 sm:px-7 ">
      <div className="flex  ">
        <a href="/">
          <h1 className="text-3xl leading-none font-bold ">Filmverse</h1>
        </a>
      </div>
      <div className="relative flex items-center ">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2  rounded-full lg:w-[30vw] w-[40vw] text-blackg  border border-teal-500 outline-teal-500 text-black"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleSearch}
          value={search}
        />

        <div className="absolute right-3">
          <BsSearch onClick={handleSearchClick} />
        </div>
      </div>
      <HamburgerManu />
    </nav>
  );
};

export default Navbar;
