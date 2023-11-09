import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './ReviewsStyles';
import config from '../Api';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const { API_KEY, BASE_URL } = config;

    fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length > 0) {
          setReviews(data.results);
        }
      })
      .catch((error) => console.error(error));
  }, [movieId]);

  return (
    <S.ReviewsContainer>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <S.ReviewList>
          {reviews.map((review) => (
            <S.ReviewItem key={review.id}>
              <S.ReviewAuthor>Author: {review.author}</S.ReviewAuthor>
              <p>Review: {review.content}</p>
            </S.ReviewItem>
          ))}
        </S.ReviewList>
      ) : (
        <S.NoReviews>We don't have any reviews for this movie</S.NoReviews>
      )}
    </S.ReviewsContainer>
  );
}

export default Reviews;