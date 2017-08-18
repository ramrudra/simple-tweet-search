import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const TweetUserData = styled.div`
  display: flex;
  align-items: center;
  
  img {
    border-radius: 50%;
    margin-right: 10px;
  }
  
  span {
    color: ${colorConsts.gray}
  }
`;

export default TweetUserData;
