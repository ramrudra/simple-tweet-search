import React from 'react';

// Containers
import TweetSearch from 'appContainers/TweetSearch/TweetSearch';
import TweetsList from 'appContainers/TweetsList/TweetsList';

const Home = (props) => {
  return (
   <div>
     {props.route.path !== 'favourites' &&
      <TweetSearch />
     }
     <TweetsList path={props.route.path} />
   </div>
  )
};

export default Home;
