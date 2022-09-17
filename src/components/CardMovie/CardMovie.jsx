import { IMG_PATH_URL } from 'constants/Constants';
import noImage from '../../image/noImage.jpg';
import { ImArrowLeft2 } from 'react-icons/im';
import { LinkBack } from './CardMovie.styled';
import { useLocation } from 'react-router-dom';
import { Box } from 'components/Box';

export const CardMovie = ({ movie }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const yearMovie = `${movie.release_date.slice(0, 4)}`;
  const arrGenres = () => {
    const arrNameGenres = '';
    return movie.genres.map(({ name }) => arrNameGenres + ' ' + name);
  };
  const stringGenres = arrGenres().toString();

  return (
    <Box p="10px" borderBottom="1px solid black" className="shadow">
      <LinkBack to={backLinkHref}>
        <ImArrowLeft2 />
        <span>Go back</span>
      </LinkBack>
      <Box display="flex" alignItems="center">
        <img
          width="350"
          src={movie.poster_path ? IMG_PATH_URL + movie.poster_path : noImage}
          alt={movie.title}
        />
        <Box display="flex" flexDirection="column" gridGap="20px" p="20px">
          <h2>
            {movie.title} {movie.release_date && `(${yearMovie})`}
          </h2>
          <p>User Score: {Math.round((movie.vote_average * 100) / 10)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview ? movie.overview : 'no overview'}</p>
          <h3>Genres</h3>
          <p>{movie.genres.length > 0 ? stringGenres : 'no genres'}</p>
        </Box>
      </Box>
    </Box>
  );
};
