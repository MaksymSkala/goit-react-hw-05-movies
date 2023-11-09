import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Navigation } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="movies">Movies</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;