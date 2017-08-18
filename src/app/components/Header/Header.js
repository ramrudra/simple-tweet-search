import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
