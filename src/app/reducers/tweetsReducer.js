import ActionTypes from 'ActionTypes';

// Tweets initial state
const tweetsInitialState = {
  isLoading: false,
  list: [],
  fav: []
};

export default function tweets(state = tweetsInitialState, action) {
  switch (action.type) {

    case ActionTypes.FETCH_TWEETS_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading
      };

    case ActionTypes.FETCH_TWEETS_SUCCESS:
      return {
        ...state,
        list: action.data
      };

    default:
      return state;
  }
}
