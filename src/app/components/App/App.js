import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from 'appComponents/Header/Header';

// Styled Components
import Container from './styles/Container'

// Styles
import './App.scss';

class App extends Component {

  componentDidMount() {
    if(!localStorage.getItem('favTweets')) {
      localStorage.setItem('favTweets', JSON.stringify([]));
    }
  }

  render() {
    return (
      <Container>
        <Header />
        {this.props.children}
      </Container>
    );
  }
};

App.propTypes = { children: PropTypes.object };

export default App;
