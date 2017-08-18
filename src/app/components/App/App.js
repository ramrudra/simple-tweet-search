import React from 'react';
import PropTypes from 'prop-types';

// Components
import Header from 'appComponents/Header/Header';

// Styled Components
import Container from './sub-components/Container'

// Styles
import './App.scss';

function App({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
