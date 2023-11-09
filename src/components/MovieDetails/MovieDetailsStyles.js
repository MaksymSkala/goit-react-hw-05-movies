import styled from 'styled-components';

export const MovieDetailsContainer = styled.div`
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  margin: 0;
`;

export const MovieImage = styled.img`
  max-width: 100%;
`;

export const MovieTitle = styled.h1`
  margin: 10px 0;
`;

export const Overview = styled.p`
  margin: 10px 0;
`;

export const Genres = styled.p`
  margin: 10px 0;
`;

export const GoBackButton = styled.button`
  background-color: rgb(172, 168, 168);
  color: #181616;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const MovieInfoContainer = styled.div`
  display: flex;
`;

export const MovieTextInfo = styled.div`
  flex: 1;
  padding: 0 20px;
`;