import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'services/themoviedb-api';
import { Box } from 'components/Box';

export const Home = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(setMoviesTrending);
  }, []);

  return (
    <>
      <Box as="h2" pt="20px" pb="20px">
        Trending today
      </Box>
      <ul>
        {moviesTrending.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
