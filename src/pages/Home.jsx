// import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import {TrendingList} from "../components/TrendingList/TrendingList"
import {fetchTrendingFilms} from "../servise/api";
import { Title } from "./Home.styled";

const Home = () => {
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
      <Title>Trending today</Title>
      {trending && <TrendingList trending={ trending }/>}
    </div>
  );
};

export default Home;