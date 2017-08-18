import React, { PropTypes } from 'react';
import Header from '../Header/Header';

function App({ children }) {
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
