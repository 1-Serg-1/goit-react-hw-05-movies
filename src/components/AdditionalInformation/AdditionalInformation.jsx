import { Box } from 'components/Box';
import { NavLink, useLocation } from 'react-router-dom';

export const AdditionalInformation = () => {
  const location = useLocation();

  return (
    <Box p="20px" borderBottom="1px solid black" className="shadow">
      <Box as="h3" mb="10px">
        Additional information
      </Box>
      <ul>
        <li>
          <NavLink
            to="cast"
            state={{ from: location.state?.from ?? '/movies' }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            state={{ from: location.state?.from ?? '/movies' }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </Box>
  );
};
