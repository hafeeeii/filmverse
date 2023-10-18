import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Row from "../components/Row";
import requests from "../requests";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div>
      <Hero />
      <Row title="Upcoming" requests={requests.requestUpcoming} />
      <Row title="Trending" requests={requests.requestTrending} />
      <Row title="Popular" requests={requests.requestPopular} />
      <Row title="Top Rated" requests={requests.requestTopRated} />
      <Row title="Horror" requests={requests.requestHorror} />
    </div>
  );
};

export default Home;
