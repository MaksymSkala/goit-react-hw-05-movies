import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color #fff;
  color: white;
  padding: 10px 0;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0, 0, 0, 20px;
    gap: 16px;
    display: flex;      
    justify-content: left;   
  }

  li {
    a {
      text-decoration: none;
      font-weight: bold;
      color: #645c5c;

      &:hover, &:active {
        text-decoration: underline;
        color: #181616;
      }
    }
  }
`;