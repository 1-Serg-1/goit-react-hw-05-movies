import { AdditionalInformation } from 'components/AdditionalInformation/AdditionalInformation';
import { CardMovie } from 'components/CardMovie/CardMovie';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/themoviedb-api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return null;
  }

  return (
    <>
      <CardMovie movie={movie} />
      <AdditionalInformation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
