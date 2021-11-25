import Button from 'react-bootstrap';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledItemboxDiv = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ListPage = () => {
  //최초 데이터 다운로드 (api요청)
  const [no, setNo] = useState(6);

  const [post, setPost] = useState({
    id: no,
    title: '',
    content: '',
  });

  const [posts, setPosts] = useState([
    { id: 1, title: '제목1', content: '내용1' },
    { id: 2, title: '제목2', content: '내용2' },
    { id: 3, title: '제목3', content: '내용3' },
    { id: 4, title: '제목4', content: '내용4' },
    { id: 5, title: '제목5', content: '내용5' },
  ]);

  const handleWrite = () => {
    //ListPage setPosts에 form에 적힌 값을 넣어서 오브젝트생성
    //e.preventDefault(); // : from태그가 하려는 액션을 중지 시켜야 함
    setPosts([...posts, post]);
  };

  const handleForm = (e) => {
    //computedPropertyNames [key]:value (키값 동적할당)
    setPost({ ...post, [e.target.name]: e.target.value });
    console.log(post.title, post.content);
    setNo(no + 1);
  };
  //3450
  return (
    <div>
      <h1>리스트 페이지</h1>
      <form>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={post.title}
          onChange={handleForm}
          name="title"
        />
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={post.content}
          onChange={handleForm}
          name="content"
        />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
      <hr />
      {posts.map((post) => (
        <StyledItemboxDiv>
          <div>
            번호 : {post.id} / 제목 : {post.title} / 내용: {post.content}
          </div>
          <button>삭제</button>
        </StyledItemboxDiv>
      ))}
    </div>
  );
};

export default ListPage;
