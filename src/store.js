// 액션
export const increase = (username) => ({
  type: 'INCREMENT',
  payload: username,
});
export const decrease = () => ({ type: 'DECREMENT' });

// 상태
const initState = {
  number: 1,
  username: '',
};
// reducer : 액션의 결과를 걸러냄
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { number: state.number + 1, username: action.payload };
    case 'DECREMENT':
      return { number: state.number - 1 };
    default:
      return state;
  }
};
export default reducer;
