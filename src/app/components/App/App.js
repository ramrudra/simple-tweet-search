import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from 'appComponents/Header/Header';

// Styled Components
import Container from './styles/Container'

// Styles
import './App.scss';

const App = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

App.propTypes = { children: PropTypes.object };

export default App;
