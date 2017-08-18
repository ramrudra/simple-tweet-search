import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const SearchSubmit = styled.button`
  cursor: pointer;
	height: 45px;
	transition: background 0.3s ease-in-out 0s;
	width: 45px;
	border: 2px solid ${colorConsts.white};
	font-size: 20px;
	color: ${colorConsts.white};
	background: ${colorConsts.blue};
	position: absolute;
  right: 5px;
  
  &:focus {
    outline: none;
  }
`;

export default SearchSubmit;
