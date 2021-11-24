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
        <li>오시는 길: 서울 강남구</li>
        <li>전화번호 : 020000000</li>
      </ul>
    </StyledFooterDiv>
  );
};

export default Footer;
