import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Text } from './FilmList.styled';

function FilmList({ movies }) {
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();

  return (
    <div>
      <List>
        {movies?.map(({ id, title, poster_path, name }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {/* {title} */}
                <img
                  src={IMG_URL + poster_path}
                  alt={title || name}
                  width="300"
                  height="450"
                />
                <Text>{title || name}</Text>
              </Link>
            </Item>
          );
        })}
      </List>
    </div>
  );
}

FilmList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default FilmList;