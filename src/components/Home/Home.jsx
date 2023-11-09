import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, MovieList, MovieItem } from './HomeStyles';
import config from '../Api';
import { useLocation } from 'react-router-dom';


function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const { API_KEY, BASE_URL } = config;
    const TRENDING_ENDPOINT = `${BASE_URL}/trending/all/week`;

    fetch(`${TRENDING_ENDPOINT}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setTrendingMovies(data.results);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <HomeContainer>
      <h2>Trending today</h2>
      <MovieList>
        {trendingMovies.map((movie) => (
          <MovieItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </MovieItem>
        ))}
      </MovieList>
    </HomeContainer>
  );
}
export default Home;