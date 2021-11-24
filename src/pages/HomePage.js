import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Home from '../components/Home/Home';

//상태값은 page가 들고있도록 할것 component에는 없는게 좋음 (요청도 마찬가지)
const HomePage = () => {
  // http 요청 (fetch, axios(다운로드))
  const [boards, setBoards] = useState([]);
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    //다운로드 가정
    let data = [
      { id: 1, title: 'title1', content: 'content1' },
      { id: 2, title: 'title2', content: 'content2' },
      { id: 3, title: 'title3', content: 'content3' },
    ];

    setBoards([...data]);
    setUser({ id: 1, username: 'ssar' });
  }, []); //빈배열이면 한번만 실행
  return (
    <div>
      <Header />
      <Home
        boards={boards}
        setBoards={setBoards}
        number={number}
        setNumber={setNumber}
        user={user}
      />
      <Footer />
    </div>
  );
};

export default HomePage;
