import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const TweetListFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  
  button {
    color: ${colorConsts.blue};
    background: none;
    padding: 10px;
    box-shadow: none;
    border: 1px solid ${colorConsts.blue};
    width: 125px;
    font-size: 16px;
    cursor: pointer;
    transition: transform 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
    
    &:hover {
      transform: scale(1.1);
    }
    
    &:disabled {
      color: ${colorConsts.gray};
      border: 1px solid ${colorConsts.gray};
      opacity: .6;
    }
        
    i {
      margin: 0 5px;
    }
  }
`;

export default TweetListFooter;
