import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 20px 0;
`;

export const ReviewList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  margin: 10px 0;
`;

export const ReviewAuthor = styled.p`
  font-weight: bold;
`;

export const NoReviews = styled.p`
  font-style: italic;
`;