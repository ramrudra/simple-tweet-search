import keyMirror from 'key-mirror';

const ActionTypes = keyMirror({
  // Fetch Tweets
  FETCH_TWEETS_REQUEST: null,
  FETCH_TWEETS_SUCCESS: null,
  FETCH_TWEETS_FAILURE: null,
});

export default ActionTypes;
