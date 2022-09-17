// import { Layout } from 'components/Layout/Layout';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getQuerySearch } from 'services/themoviedb-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Movies = () => {
  const [querySearch, setQuerySearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!querySearch) {
      return;
    }
    getQuerySearch(querySearch).then(setMovies);
  }, [querySearch]);

  useEffect(() => {
    if (location.search === '' && query === null) {
      return;
    }
    getQuerySearch(query).then(setMovies);
  }, [location.search, query]);

  const searchMovies = ({ querySearch }) => {
    if (querySearch.trim() === '') {
      toast.warn('Field cannot be empty', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setSearchParams({});
      return;
    }
    setSearchParams({ query: querySearch });
    setQuerySearch(querySearch);
    setMovies([]);
  };

  return (
    <>
      <Searchbar onSubmit={searchMovies} />
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Movies;
