import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

// Styled Components
import NavSection from './styles/NavSection';
import HeaderWrapper from './styles/HeaderWrapper';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <NavSection>
        <li className={classNames({active: props.path === '/'})}>
          <Link to="/">Search #</Link>
        </li>
        <li className={classNames({active: props.path === '/favourites'})}>
          <Link to="/favourites">Favourite Tweets</Link>
        </li>
      </NavSection>
    </HeaderWrapper>
  )
};

export default Header;
