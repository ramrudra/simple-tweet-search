import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const SearchBar = styled.input`
  background: ${colorConsts.white};
	border: 0 none;
	color: ${colorConsts.gray};
	height: 45px;
	margin: 0;
	padding: 10px;
	transition: background 0.3s ease-in-out 0s;
	width: 95%;
	font-size: 16px;
	box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);
  transition: box-shadow 200ms cubic-bezier(0.4, 0.0, 0.2, 1);
  margin-left: 5px;
   @media screen and (max-width: 768px) {
     width: 92%;
   }
  
  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.08);
  }
  
  &:focus {
    outline: none;
  }
`;

export default SearchBar;
