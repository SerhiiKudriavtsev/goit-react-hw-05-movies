import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8d04aa17424a03dfb8bf9da86b904800';

export const fetchTrendingFilms = async () => {

  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
}