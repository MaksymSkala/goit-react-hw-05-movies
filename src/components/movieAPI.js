import config from './Api';

const { API_KEY, BASE_URL } = config;

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);

    if (response.ok) {
      const data = await response.json();
      return data.results;
    } else {
      throw new Error('Failed to fetch search results');
    }
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch movie details');
    }
  } catch (error) {
    throw error;
  }
};