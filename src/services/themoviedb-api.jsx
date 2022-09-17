import axios from 'axios';

const API_KEY = 'cabd08f3104067511ed807fd50c57777';
const TIME_WINDOW = 'day';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`trending/movie/${TIME_WINDOW}`, {
      params: { api_key: API_KEY },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getQuerySearch = async querySearch => {
  try {
    const response = await axios.get('search/movie', {
      params: {
        api_key: API_KEY,
        query: `${querySearch}`,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieById = async id => {
  try {
    const response = await axios.get(`movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(`movie/${id}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(`movie/${id}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
