import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from '../servise/api';
import FilmList from 'components/FilmList/FilmList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  let [searchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      API.getMovies(query).then(r => setMovies(r));
    }
  }, [searchParams]);

  return (
    <>
      <SearchForm />
      {movies && <FilmList movies={movies} />}
      {movies?.length === 0 && <p>Nothing is found</p>}
    </>
  );
};

export default Movies;
