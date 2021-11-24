import { createRef, useEffect, useMemo, useRef, useState } from 'react';
import './App.css';

//useRef (디자인)
// dom 변경할 때 사용
const App = () => {
  const myRef = useRef(null);

  const [list, setList] = useState([
    { id: 1, name: '길동' },
    { id: 2, name: '꺽정' },
  ]);

  const myRefs = Array.from({ length: list.length }).map(() => createRef());

  return (
    <div>
      <button
        onClick={() => {
          myRef.current.style.backgroundColor = 'red';

          myRefs[0].current.style.backgroundColor = 'blue';
        }}
      >
        색변경
      </button>
      <div ref={myRef}>박스</div>
      {list.map((user, index) => (
        <h1 ref={myRefs[index]}>{user.name}</h1>
      ))}
    </div>
  );
};
//export default App;
