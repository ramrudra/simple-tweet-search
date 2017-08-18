import keyMirror from 'key-mirror';

const ActionTypes = keyMirror({
  // Fetch Tweets
  FETCH_TWEETS_REQUEST: null,
  FETCH_TWEETS_SUCCESS: null,
  FETCH_TWEETS_FAILURE: null,

  // Save Tweet
  SAVE_TWEET_REQUEST: null,
  SAVE_TWEET_SUCCESS: null,
  SAVE_TWEET_FAILURE: null,
});

export default ActionTypes;
