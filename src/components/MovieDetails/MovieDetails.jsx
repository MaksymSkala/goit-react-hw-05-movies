import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import * as S from './MovieDetailsStyles';
import config from '../Api';

const MovieDetails = () => {
  const { movieId } = useParams();  
  const location = useLocation();
  const [movieDetails, setMovieDetails] = useState(null);
  const [backLinkHref, setBackLinHref] = useState('');
  useEffect(() => {
    const { API_KEY, BASE_URL } = config;
    setBackLinHref(location.state?.from ?? '/movies');
    console.log(location.state?.form);
    fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <S.MovieDetailsContainer>
      <Link to={backLinkHref}>Go back</Link>
      {/* <S.GoBackButton onClick={handleGoBack}>Go back</S.GoBackButton>*/}
      {movieDetails ? (
        <S.MovieInfoContainer>
          <S.MovieImage
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <S.MovieTextInfo>
            <S.MovieTitle>{movieDetails.title}</S.MovieTitle>
            <h3>Overview</h3>
            <S.Overview>{movieDetails.overview}</S.Overview>
            <h3>Genres</h3>
            <S.Genres>
              {movieDetails.genres.map((genre) => genre.name).join(', ')}
            </S.Genres>
          </S.MovieTextInfo>
        </S.MovieInfoContainer>
      ) : (
        <p>Loading movie details...</p>
      )}

      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="reviews">Reviews</Link>
      <hr />
      <Outlet />
    </S.MovieDetailsContainer>
  );
};

export default MovieDetails;