import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const TweetUserData = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  img {
    border-radius: 50%;
    margin-right: 10px;
  }
  
  span {
    color: ${colorConsts.gray}
  }
  
  a {
    text-decoration: none;
  }
  
  .created-time,
  .screen-name {
    font-size: 14px;
  }
`;

export default TweetUserData;
