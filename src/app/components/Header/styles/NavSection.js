import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const NavSection = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  padding: 0;
  margin: 0;
 
 li {
   flex: 1;
   text-align: center;
   padding: 10px;
   
   &.active {
     background: ${colorConsts.bgGray};
     
     a {
      color: ${colorConsts.blue};
     }
   }
   
   a {
     color: ${colorConsts.white};
     font-size: 24px;
     text-decoration: none;
     @media screen and (max-width: 768px) {
       font-size: 20px;
     }
   }
 }
`;

export default NavSection;
