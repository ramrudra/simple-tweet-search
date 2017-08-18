import styled from 'styled-components';

// Color Consts
import { colorConsts } from 'appUtils/appConsts';

const Container = styled.div`
  background: ${colorConsts.bgGray};
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  padding: 1.5em;
`;

export default Container;
