import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../servise/api';
import { CastList } from '../components/CastList/CastList';
import { List } from '../pages/Cast.styled'

const Cast = () => {
  const [cast, setCast] = useState(null);
  let { movieId } = useParams();

  useEffect(() => {
    API.getCast(movieId).then(r => setCast(r));
  }, [movieId]);

  return (
    <List>
      {cast?.map((oneCast, index) => (
        <CastList key={index} oneCast={oneCast} />
      ))}
    </List>
  );
};

export default Cast;