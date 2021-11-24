import { useEffect, useMemo, useState } from 'react';
import './App.css';

// useMemo => 메모라이제이션
const App = () => {
  const [list, setList] = useState([1, 2, 3, 4]);
  const [str, setStr] = useState('합계');

  const getAddResult = () => {
    let sum = 0;
    list.forEach((item) => {
      sum += item;
    });

    console.log('getAddResult 함수 실행됨 :', sum);
    return sum;
  };

  const addResult = useMemo(() => getAddResult(), [list]);
  //1.어떤함수 기억 2.dependendcy

  return (
    <div>
      <button
        onClick={() => {
          setStr('안녕');
        }}
      >
        문자 변경
      </button>
      <button
        onClick={() => {
          setList([...list, 10]);
        }}
      >
        리스트 값 추가{' '}
      </button>
      <div>
        {list.map((item) => (
          <h1>{item}</h1>
        ))}
      </div>
      <div>
        {str} : {addResult}
      </div>
    </div>
  );
};
//export default App;
