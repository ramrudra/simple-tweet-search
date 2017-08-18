import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const TweetSaveButton = styled.div`
  position: absolute;
  color: ${colorConsts.gray};
  top: 15px;
  right: 15px;
  font-size: 14px;
  
  i {
    font-size: 18px;
  }
`;

export default TweetSaveButton;
