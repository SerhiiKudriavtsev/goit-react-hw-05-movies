import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '8d04aa17424a03dfb8bf9da86b904800';

export const fetchTrendingFilms = async () => {

  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data.results.map(({ id, title, poster_path, name }) => {
    return {
      id,
      title,
      poster_path,
      name,
    };
  });
}

export const fetchDetailFilms = async velue => { 
  const response = await axios.get(`/movie/${velue}?api_key=${API_KEY}`);
  return response.data;
}

export const getCast = async value => {
  const response = await axios.get(
    `/movie/${value}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data.cast.map(({ name, character, profile_path, id }) => {
    return {
      name,
      character,
      profile_path,
      id,
    };
  });
};

export const getReviews = async value => {
  const response = await axios.get(
    `/movie/${value}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data.results.map(({ author, content, id }) => {
    return {
      author,
      content,
      id,
    };
  });
};

export const getMovies = async value => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${value}&page=1`
  );
  return response.data.results.map(({ id, title, poster_path, name }) => {
    return {
      id,
      title,
      poster_path,
      name,
    };
  });
};