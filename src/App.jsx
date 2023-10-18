import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import MovieDetail from "./pages/MovieDetail";
import Explore from "./pages/Explore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDataFromAPI } from "./utils/fetchDataFromApi";
import { getGenres } from "./store/homeSlice";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import Watchlist from "./pages/Watchlist";
import { Toaster } from "react-hot-toast";
import Search from "./pages/Search";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    genresCall();
  }, []);

  const genresCall = async () => {
    let promises = [];
    let endPoint = ["movie", "tv"];
    let allGenres = {};

    endPoint.forEach((url) =>
      promises.push(fetchDataFromAPI(`/genre/${url}/list`))
    );

    const data = await Promise.all(promises);

    data.map(({ genres }) => genres.map((item) => (allGenres[item.id] = item)));

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Toaster position="bottom-center" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <GuestGuard>
              <SignUp />
            </GuestGuard>
          }
        />
        <Route
          path="/login"
          element={
            <GuestGuard>
              <Login />
            </GuestGuard>
          }
        />

        <Route
          path="/watchlist"
          element={
            <AuthGuard>
              <Watchlist />
            </AuthGuard>
          }
        />
        <Route path="/search/:query" element={<Search />} />
        <Route path="/details/:mediaType/:id" element={<MovieDetail />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
