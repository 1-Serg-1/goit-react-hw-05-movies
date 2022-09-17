import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/themoviedb-api';
import { IMG_PATH_URL } from 'constants/Constants';
import { ImgCast, ItemCast, ListCast } from './Cast.styled';
import noPhotoAvailable from '../../image/noPhotoAvailable.jpg';
import { Box } from 'components/Box';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (cast.length === 0) {
    return (
      <Box as="p" p="15px">
        We don't have list cast for this movie.
      </Box>
    );
  }

  if (!cast) {
    return null;
  }

  return (
    <ListCast>
      {cast.map(({ id, name, profile_path, character }) => {
        return (
          <ItemCast key={id}>
            <ImgCast
              src={
                profile_path ? IMG_PATH_URL + profile_path : noPhotoAvailable
              }
              alt={name}
            />
            <Box
              display="flex"
              flexDirection="column"
              flexWrap="wrap"
              gridGap="10px"
            >
              <h3>{name}</h3>
              <p>Character: {character}</p>
            </Box>
          </ItemCast>
        );
      })}
    </ListCast>
  );
};

export default Cast;
