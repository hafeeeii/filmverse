import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_API_TMDB_TOKEN;

export const headers = {
  Authorization: `bearer ${TMDB_TOKEN}`,
};

export const fetchDataFromAPI = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params:{
        ...params,
        include_adult:false,
       
      }
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
