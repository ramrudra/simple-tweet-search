import axios from 'axios';

// Action Types
import ActionTypes from 'ActionTypes';

// UTILS
import requestHeaders from 'appUtils/requestHeaders';

// App Consts
import { apiConsts } from 'appUtils/appConsts';
const { API_URL, ACCESS_TOKEN } = apiConsts;

// //////////////////////
// Fetch Tweets By #//
// ////////////////////
export function fetchTweets(hash) {
  return (dispatch) => {
    requestHeaders(ACCESS_TOKEN);
    dispatch(fetchTweetsRequest());
    return axios.get(`${API_URL}?q=%23${hash}&result_type=recent`)
      .then(res => {
        dispatch(fetchTweetsSuccess(res.data.statuses));
      })
      .catch((error) => {
        dispatch(fetchTweetsFailure(error));
        console.log(error);
      });
  };
}

// Fetch Tweets Request
function fetchTweetsRequest() {
  return {
    type: ActionTypes.FETCH_TWEETS_REQUEST,
    isLoading: true,
  };
}

// Fetch Tweets Success
function fetchTweetsSuccess(data) {
  return {
    type: ActionTypes.FETCH_TWEETS_SUCCESS,
    isLoading: false,
    data
  };
}

// Fetch Tweets Failure
function fetchTweetsFailure(err) {
  return {
    type: ActionTypes.FETCH_TWEETS_FAILURE,
    isLoading: false,
    payload: err,
  };
}


/////////////////
// Save tweet //
///////////////
export function saveTweet(data) {
  const favTweets = JSON.parse(localStorage.getItem('favTweets'));
  const updatedFavs = favTweets.concat(data);

  return (dispatch) => {
    dispatch(saveTweetRequest());
    localStorage.setItem('favTweets', JSON.stringify(updatedFavs));
    dispatch(saveTweetSuccess(updatedFavs));
  };
}

// Fetch Tweets Request
function saveTweetRequest() {
  return {
    type: ActionTypes.SAVE_TWEET_REQUEST,
    isLoading: true,
  };
}

// Fetch Tweets Success
function saveTweetSuccess(data) {
  return {
    type: ActionTypes.SAVE_TWEET_SUCCESS,
    isLoading: false,
    data
  };
}
