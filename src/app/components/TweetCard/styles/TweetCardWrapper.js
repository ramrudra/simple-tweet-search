import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const TweetCardWrapper = styled.div`
  background: ${colorConsts.white};
	border: 0 none;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
	border-radius: 2px;
	padding: 15px;
	margin-bottom: 15px;
	width: 49%;
	position: relative;
	@media screen and (max-width: 768px) {
    width: 100%;
  }
  
  .tweet-tweet {
    font-size: 14px;
    line-height: 1.25;
  }
  
  .no-fav {
    cursor: pointer;
  }
  
  .fav {
    color: ${colorConsts.green}
  }
}`;

export default TweetCardWrapper;
