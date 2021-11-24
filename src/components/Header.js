import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// 하나의 컴포넌트를 생성(재사용)
// styled-component => js파일과 css파일 동시에 관리 가능
const StyledHeaderDiv = styled.div`
  border: 5px solid black;
  height: 300px;
  background-color: ${(props) => props.backgroundColor};
`;
const StyledHeaderLink = styled(Link)`
  color: white;
`;
const Header = () => {
  return (
    <>
      <StyledHeaderDiv backgroundColor={'blue'}>
        <ul>
          <li>
            <StyledHeaderLink to="/">홈</StyledHeaderLink>
          </li>
          <li>
            <StyledHeaderLink to="/login/10">로그인</StyledHeaderLink>
          </li>
        </ul>
      </StyledHeaderDiv>

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Link to="/" className="navbar-brand">
              홈으로
            </Link>
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                홈
              </Link>
              <Link to="/login" className="nav-link">
                login
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </>
  );
};

export default Header;
