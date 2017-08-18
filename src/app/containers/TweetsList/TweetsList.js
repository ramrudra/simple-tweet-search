import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions

// App Components
import TweetCard from 'appComponents/TweetCard/TweetCard';

// Styled Components
import TweetListWrapper from './styles/TweetListWrapper';

class TweetsList extends Component {

  render() {

    //props
    const { list: tweetsList, fav: favTweets } = this.props.tweets;

    return (
      <TweetListWrapper>
        {tweetsList.map( (data, i) =>
          <TweetCard
            key={i}
            tweetData={data}
          />
        )}
      </TweetListWrapper>
    )
  }
}

TweetsList.propTypes = {

};

// Redux state mapping
const mapStateToProps = state => ({
  tweets: state.tweets
});

// Dispatch Actions
const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList);
