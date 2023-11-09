import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  MovieList,
  MovieItem,
} from './MoviesStyles';
import config from '../Api';

function Movies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isReturning, setIsReturning] = useState(false);

  const searchMovies = async (query) => {
    try {
      const { API_KEY, BASE_URL } = config;

      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!isReturning) {
      const previousSearchTerm = localStorage.getItem('previousSearchTerm');
      if (previousSearchTerm) {
        setSearchTerm(previousSearchTerm);
        searchMovies(previousSearchTerm);
      }
    } else {
      setIsReturning(false);
    }
  }, [isReturning]);

  const handleSearch = () => {
    localStorage.setItem('previousSearchTerm', searchTerm);
    searchMovies(searchTerm);
  }

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a keyword to search"
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchContainer>

      <MovieList>
        {searchResults.map((result) => (
          <MovieItem key={result.id}>
            <Link to={`/movies/${result.id}`}>{result.title}</Link>
          </MovieItem>
        ))}
      </MovieList>
    </div>
  );
}

export default Movies;