import React from 'react';
import styled from 'styled-components';

const StyledFooterDiv = styled.div`
  border: 5px solid black;
  height: 300px;
`;

const Footer = () => {
  return (
    <StyledFooterDiv>
      <ul>
        <li>메뉴1</li>
        <li>메뉴2</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
