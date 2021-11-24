import React from 'react';
import Login from '../components/login/Login';

const LoginPage = (props) => {
  const { match, history } = props;
  console.log('LoginPage : ', match.params);
  return (
    <div>
      <button onClick={() => history.push('/')}>뒤로가기</button>
      <Login />
    </div>
  );
};

export default LoginPage;
//2641
