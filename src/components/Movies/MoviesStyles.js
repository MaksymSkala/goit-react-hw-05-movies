import styled from 'styled-components';

export const SearchContainer = styled.div`
  text-align: center;
  margin: 20px 0;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 5px;
  border: 1px solid #ccc;
`;

export const SearchButton = styled.button`
  background-color: rgb(172, 168, 168);
  color: #181616;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;

export const MovieList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MovieItem = styled.li`
  margin: 10px 0;
`;