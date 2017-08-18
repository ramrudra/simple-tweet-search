import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const SearchBar = styled.form`
  position: relative;
  width: 50%;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  
  span {
    color: ${colorConsts.gray};
    font-size: 30px;
    vertical-align: middle;
  }
`;

export default SearchBar;
