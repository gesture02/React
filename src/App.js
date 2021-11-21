import logo from './logo.svg';
import './App.css';

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

function App() {
  let list = [1, 2, 3];
  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n}</h1>
        ))}
      </div>
    </div>
  );
}
export default App;
