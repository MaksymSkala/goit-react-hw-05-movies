import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './CastStyles';
import config from '../Api';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const { API_KEY, BASE_URL } = config;

    fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setCast(data.cast);
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <S.CastContainer>
      <h2>Cast</h2>
      <S.ActorList>
        {cast.map((actor) => (
          <S.ActorItem key={actor.id}>
            {actor.profile_path && (
              <S.ActorImage
                src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                alt={actor.name}
              />
            )}
            <div>
              <p>Name: {actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </S.ActorItem>
        ))}
      </S.ActorList>
    </S.CastContainer>
  );
}

export default Cast;