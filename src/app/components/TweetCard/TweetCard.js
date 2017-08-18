import React from 'react';

// Styled Components
import TweetCardWrapper from './styles/TweetCardWrapper';

const TweetCard = ({ props }) => {
  const { text } = props;
  return (
    <TweetCardWrapper>
      {text}
    </TweetCardWrapper>
  )
};

export default TweetCard;
