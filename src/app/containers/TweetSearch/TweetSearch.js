import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { fetchTweets } from 'appActions';

// Styled Components
import SearchWrapper from './styles/SearchWrapper';
import SearchInput from './styles/SearchInput';
import SearchButton from './styles/SearchSubmit';

class TweetSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hash: ''
    };
  }

  // Update Hash Tag
  updateHash = (e) => this.setState({ hash: e.target.value });

  // Fetch Tweets Actions
  fetchTweets = (e) => {
    e.preventDefault();
    this.props.fetchTweets(this.state.hash);
  };

  render() {

    return (
      <SearchWrapper onSubmit={this.fetchTweets}>
        <span>#</span>
        <SearchInput
          onChange={this.updateHash}
          placeholder="Search for a twitter # here..."
        />
        <SearchButton
          type="submit"
        >
          <i className="fa fa-search" />
        </SearchButton>
      </SearchWrapper>
    )
  }
}

TweetSearch.propTypes = {

};

const mapDispatchToProps = {
  fetchTweets
};

export default connect(null, mapDispatchToProps)(TweetSearch);
