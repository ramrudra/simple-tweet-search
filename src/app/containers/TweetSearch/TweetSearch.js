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

  render() {
    // State Data
    const { hash } = this.state;

    return (
      <SearchWrapper>
        # <SearchInput
          onChange={this.updateHash}
          placeholder="Search # here..."
        />
        <SearchButton
          onClick={() => this.props.fetchTweets(hash)}
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
