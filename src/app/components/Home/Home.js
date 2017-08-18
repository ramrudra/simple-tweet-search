import React from 'react';

// Containers
import TweetSearch from 'appContainers/TweetSearch/TweetSearch';
import TweetsList from 'appContainers/TweetsList/TweetsList';

const Home = () => {
  return (
   <div>
     <TweetSearch />
     <TweetsList />
   </div>
  )
};

export default Home;
