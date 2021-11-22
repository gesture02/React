import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Sub from './Sub';

// 0. react 엔진 - 데이터변경감지해서 UI그려줌
// 1. 실행과정(index.html) : SinglePageApplication(SPA)
// react페이지이동->body의 내용이 바뀜
// 2. JSX문법 : js에 html을 넣는 방법
// (1) return시에 하나의 Dom만 리턴할 수 있다.
// (2) 변수 선언은 let 혹은 const로만 해야함. (변수의 스코프)
// (3) if사용 불가능 -> 삼항연산자는 사용가능(조건 ? 값(true) : 값(false))
// (4) 조건부 렌더링 (조건 && 값(true일때만 출력))
// (5) css 디자인
//    - 내부에 적는 방법 style = {mystyle}
//    - 외부 파일에 적는 방법
//    - 라이브러리 사용 (bootstrap, component-styled)(추천)
// let a = 10;
// const b = 30;

// function App() {
//   let c; //undefined;
//   //let d = undefined;
//   console.log(1, c);

//   const mystyle = {
//     color: 'red',
//   };

//   return (
//     <div>
//       <div style={mystyle}>안녕{a === 10 ? '10입니다' : '10이 아닙니다'}</div>
//       <h1 className="box-style">headingTag{b === 20 && '20입니다'}</h1>
//     </div>
//   );
// }

// function App() {
//   //let number = 1; //상태값(x)
//   const [number, setNumber] = useState(1); // react hooks lib 상태값(o)
//   const add = () => {
//     setNumber(number + 1); // 리액트한테 number값 변경할게 라고 요청
//     console.log('add', number);
//   };
//   //렌더링 시점 = 상태값 변경(setNumber 호출할 때)
//   return (
//     <div>
//       <h1>숫자 : {number}</h1>
//       <button onClick={add}>더하기</button>
//       <Sub />
//     </div>
//   );
// }

function App() {
  console.log('app실행');
  const [users, setUsers] = useState([
    // 레퍼런스가 변경되어야 동작한다. =====> 깊은복사
    { id: 1, name: '홍길동' },
    { id: 2, name: '홍길일' },
    { id: 3, name: '홍길이' },
    { id: 4, name: '홍길삼' },
  ]);
  const download = () => {
    let sample = [
      { id: 1, name: '홍길동' },
      { id: 2, name: '홍길일' },
      { id: 3, name: '홍길이' },
      { id: 4, name: '홍길삼' },
    ];
    //레퍼런스가 다르면 렌더링 다시됨
    setUsers(sample); //[...sample] 과의 차이 : 둘다 레퍼런스는 다르다, 그래서 리렌더링은 됨
    // 차이점은 [...sample]은 깊은복사이기 때문에 무조건 리렌더링된다.
  };
  return (
    <div>
      <button onClick={download}>다운로드</button>
      {users.map((user) => (
        <h1>
          {user.id}, {user.name}
        </h1>
      ))}
    </div>
  );
}
export default App;
