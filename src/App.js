import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import './App.css';

function App() {
  const state = useSelector(state => state.account);
  const dispatch = useDispatch();

  const { despositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      {state}
      <button onClick={() => despositMoney(1000)}>Desposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
