import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
  color: ${(props) => (props.user.username === 'ssar' ? 'blue' : 'red')};
`;
const Home = (props) => {
  const { boards, setBoards, number, setNumber, user } = props;

  return (
    <div>
      {/* <h1>번호 : {number}</h1>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        번호증가
      </button> */}
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
