// import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {TrendingList} from "../components/TrendingList/TrendingList"
import {fetchTrendingFilms} from "../servise/fetchTrendingFilms";


export const Home = () => {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    async function getTrending() {
      try {
        const trending = await fetchTrendingFilms();
        setTrending(trending);
      } catch (err) {
        console.log(err);
      }
    }
    getTrending();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      {trending && <TrendingList trending={ trending }/>}
    </div>
  );
};