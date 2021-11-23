import React from 'react';

let num = 10;

const Sub = () => {
  //자식을 컴포넌트로 뽑아놓으면 리턴을 제어가능함
  return (
    <div>
      <h1>Sub입니다</h1>
    </div>
  );
};

export { num }; // 추가적인걸 export 하고 싶으면 중괄호
export default Sub; // 이 함수를 외부에 노출
