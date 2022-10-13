import { useState, useEffect, Suspense, lazy } from 'react';
import { useParams, useLocation, Route, Routes, useNavigate } from "react-router-dom";
// import * as API from '../servise/fetchTrendingFilms';
import {fetchDetailFilms} from "../servise/api"
// import { Container } from 'components/SharedLayout/SharedLayout.styled';
import { List, Item, Button, LinkWrapper, LinkChoice, Container, StyledLink } from './MovieDetails.styled';
// import { Cast } from "./Cast";
// import { Reviews } from './Reviews';

const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));

const MovieDetails = () => {
 const [movie, setMovie] = useState(null);
  const [buttonLocation, setButtonLocation] = useState(null);
  let { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // API.fetchDetailFilms(movieId).then(r => setMovie(r));
    async function getMovie(value) {
      try {
        const movie = await fetchDetailFilms(value);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie(movieId);
  }, [movieId]);
  
  useEffect(() => {
    if (location?.state?.from) {
      setButtonLocation(location.state.from);
    }
  }, [location?.state?.from]);

  return (
    movie && (
      <>  
        <Button
          type="button"
          onClick={() => {
            navigate(buttonLocation || '/');
          }}
        >
          Go back
        </Button>
        <Container>
          <img
            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
            alt=""
          />
          <List>
            <Item>
              <h2>{`${movie.title} (${movie.release_date.slice(0, 4)})`}</h2>
              <p>{`User Score: ${movie.vote_average * 10}%`} </p>
            </Item>
            <Item>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </Item>
            <Item>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </Item>
          </List>
        </Container>
        <LinkWrapper>
          <h3>Additional information</h3>
          <LinkChoice>
            <StyledLink  to="cast">Cast</StyledLink>
            <StyledLink  to="reviews">Reviews</StyledLink>
          </LinkChoice>
        </LinkWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </>
      
    )
        
  )
};

export default MovieDetails;