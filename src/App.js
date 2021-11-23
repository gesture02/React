import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState(0);
  const [search, setSearch] = useState(0);

  const download = () => {
    // 다운로드 받고(통신)
    let downloadData = 5; //가정
    setData(downloadData);
  };

  //실행 시점
  //(1) App() 함수가 최초 실행될 때(마운트 될 때 (그림이 그려질 때))
  //(2) 상태 변수가 변경될 때 실행(dependency List에 등록되어있어야함)
  //(3) 의존리스트로 관리를 할 수 있다
  useEffect(() => {
    console.log('useEffect 실행됨');
    download();
  }, [search]); //data가 변경될때마다 실행(상태변수에 의존적), []이면 최초에만 실행됨
  return (
    <div>
      <button
        onClick={() => {
          setSearch(2);
        }}
      >
        검색하기
      </button>
      <h1>데이터 : {data}</h1>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        더하기
      </button>
    </div>
  );
};
export default App;
