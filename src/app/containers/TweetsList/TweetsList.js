import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { saveTweet } from 'appActions';

// App Components
import TweetCard from 'appComponents/TweetCard/TweetCard';

// Styled Components
import TweetListWrapper from './styles/TweetListWrapper';

class TweetsList extends Component {

  render() {

    //props
    const { path, tweets, saveTweet } = this.props;
    const { list: tweetsList, fav: favTweets } = tweets;

    // Switch Tweets data based on tthe route
    const listData = path === 'favourites' ? favTweets : tweetsList;

    return (
      <TweetListWrapper>
        {listData.map( (data, i) =>
          <TweetCard
            key={i}
            tweetData={data}
            saveTweet={saveTweet}
            path={path}
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
  saveTweet
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetsList);
