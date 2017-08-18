import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchTweets } from 'appActions';

// Styled Components
import SearchBar from './sub-components/SearchBar';
import SearchButton from './sub-components/SearchSubmit';

class TweetSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hash: ''
    };
  }

  // Update Hash Tag
  updateHash = (e) => this.setState({ hash: e.target.value });

  render() {
    // State Data
    const { hash } = this.state;

    return (
      <div>
        <SearchBar
          onChange={this.updateHash}
        />
        <SearchButton
          onClick={() => this.props.fetchTweets(hash)}
        >
          Search
        </SearchButton>
      </div>
    )
  }
}

TweetSearch.propTypes = {

};

const mapDispatchToProps = {
  fetchTweets
};

export default connect(null, mapDispatchToProps)(TweetSearch);
