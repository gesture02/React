import React from 'react';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)
// styled-component => js파일과 css파일 동시에 관리 가능
const StyledHeaderDiv = styled.div`
  border: 5px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;

const Header = () => {
  return (
    <StyledHeaderDiv backgroundColor={'blue'}>
      <ul>
        <li>오시는 길: 서울 강남구</li>
        <li>전화번호 : 020000000</li>
      </ul>
    </StyledHeaderDiv>
  );
};

export default Header;
