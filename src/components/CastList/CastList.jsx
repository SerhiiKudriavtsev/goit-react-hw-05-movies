import PropTypes from 'prop-types';
import { Item, Text } from '../CastList/CastList.styled';

export function CastList({ oneCast: { name, character, profile_path } }) {
  return (
    <Item>
      <img
        width={100}
        src={
          profile_path
            ? `https://image.tmdb.org/t/p/w200/${profile_path}`
            : 'https://dummyimage.com/100x150/000000/a2a3ab'
        }
        alt=""
      />
      <Text>{name}</Text>
      <Text>{`Character: ${character}`}</Text>
    </Item>
  );
}

CastList.propTypes = {
  oneCast: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    profile_path: PropTypes.string,
  }),
};