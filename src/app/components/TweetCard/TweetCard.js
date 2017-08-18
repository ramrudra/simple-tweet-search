import React from 'react';
import moment from 'moment';

// Styled Components
import TweetCardWrapper from './styles/TweetCardWrapper';
import TweetUserData from './styles/TweetUserData'
import TweetSaveButton from './styles/TweetSaveButton';

const TweetCard = (props) => {
  const { tweetData: { id, text, created_at, user }, saveTweet, path } = props;

  // Save Tweet Data
  const data = {
    id,
    text,
    created_at,
    user
  };

  return (
    <TweetCardWrapper>
     <TweetUserData>
       <img src={user.profile_image_url} />
       <div>
         <strong>{user.name}</strong> /
         <a target="_blank"  href={`http://www.twitter.com/${user.screen_name}`}>
           <span className="screen-name">@{user.screen_name}</span>
         </a><br />
         <span className="created-time">{moment(created_at).fromNow()}</span>
       </div>
     </TweetUserData>
      <div className="tweet-tweet">{text}</div>
      {path !== 'favourites' &&
        <TweetSaveButton onClick={() => saveTweet(data)}>
          <i className="fa fa-bookmark-o" /> Save
        </TweetSaveButton>
      }
    </TweetCardWrapper>
  )
};

export default TweetCard;
