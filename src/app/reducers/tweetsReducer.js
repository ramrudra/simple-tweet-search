import ActionTypes from 'ActionTypes';

// Localstorage data

const favTweets = JSON.parse(localStorage.getItem('favTweets'));

// Tweets initial state
const tweetsInitialState = {
  isLoading: false,
  list: [],
  fav: favTweets
};

// Tweets Reducer
export default function tweets(state = tweetsInitialState, action) {
  switch (action.type) {

    case ActionTypes.FETCH_TWEETS_REQUEST:
    case ActionTypes.SAVE_TWEET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case ActionTypes.FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        list: action.data
      };

    case ActionTypes.SAVE_TWEET_SUCCESS:
      return {
        ...state,
        fav: action.data
      };

    default:
      return state;
  }
}
