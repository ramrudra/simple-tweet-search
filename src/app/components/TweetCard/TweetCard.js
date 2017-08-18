import React from 'react';

// Styled Components
import TweetCardWrapper from './styles/TweetCardWrapper';
import TweetUserData from './styles/TweetUserData'

const TweetCard = (props) => {
  const { tweetData: { text, user } } = props;
  return (
    <TweetCardWrapper>
     <TweetUserData>
       <img src={user.profile_image_url} />
       <div>
         <strong>{user.name}</strong> / <span>@{user.screen_name}</span>
       </div>
     </TweetUserData>
      {text}
    </TweetCardWrapper>
  )
};

export default TweetCard;
