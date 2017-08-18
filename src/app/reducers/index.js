import { combineReducers } from 'redux';

// Custom Reducers
import tweets from './tweetsReducer';

const rootReducer = combineReducers({
  tweets
});

export default rootReducer;
