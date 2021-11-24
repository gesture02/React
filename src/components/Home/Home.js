import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;

//스타일 extend
const StyledAddButton = styled(StyledDeleteButton)`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
  background-color: green;
`;

const Home = (props) => {
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      <Button variant="primary">Primary</Button>

      <h1>번호 : {number}</h1>
      <StyledAddButton
        user={user}
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호증가
      </StyledAddButton>

      <br />
      <br />

      <StyledDeleteButton
        user={user}
        onClick={() => {
          setBoards([]);
        }}
      >
        전체 삭제
      </StyledDeleteButton>

      {boards.map((board) => (
        <h3>
          제목 : {board.title} 내용 : {board.content}
        </h3>
      ))}
    </div>
  );
};

export default Home;
