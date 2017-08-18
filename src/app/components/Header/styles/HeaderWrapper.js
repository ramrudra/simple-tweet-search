import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const HeaderWrapper = styled.header`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  
  .top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  
  button {
    font-weight: 300 !important;
    height: 50px;
    cursor: pointer;
  }
`;

export default HeaderWrapper;
