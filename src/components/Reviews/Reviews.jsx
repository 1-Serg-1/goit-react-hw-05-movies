import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedb-api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  if (reviews.length === 0) {
    return (
      <Box as="p" p="15px">
        We don't have any reviews for this movie.
      </Box>
    );
  }

  return (
    <Box as="ul" display="flex" flexDirection="column" gridGap="15px" p="20px">
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <Box as="h3" mb="10px">
              Author: {author}
            </Box>
            <p>{content}</p>
          </li>
        );
      })}
    </Box>
  );
};

export default Reviews;
