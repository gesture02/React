import React from 'react';

const WritePage = (props) => {
  const { posts, setPosts } = props;

  const handleWrite = () => {
    //ListPage setPosts에 form에 적힌 값을 넣어서 오브젝트생성
    let post = { id: 6, title: 'InputFormValue' };
    //setPosts({...post})
  };

  return (
    <div>
      <h1>글쓰기 페이지</h1>
      <hr />
      <form>
        <input type="text" placeholder="제목을 입력하세요" />
        <button type="button" onClick={handleWrite}>
          글쓰기
        </button>
      </form>
    </div>
  );
};

export default WritePage;
