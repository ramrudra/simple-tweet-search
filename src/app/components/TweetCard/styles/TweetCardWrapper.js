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
	max-width: 465px;
	width: 100%;
	position: relative;
`;

export default TweetCardWrapper;
