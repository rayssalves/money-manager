import "./App.css";
//important the hooks to be able to dispatch,useSelector need to be in the root of the project
import { useDispatch, useSelector } from "react-redux";
//importing the action
import { deposit } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  //inside the function calls the dispatch
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance); //

  return (
    <div className="App">
      <p>Balance : {balance}$</p>
      <button
        onClick={() => {
          //inside de button calls the action , the logic
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
      <div></div>
      <button onClick={() => {}}>Withdraw 10$</button>
    </div>
  );
}

export default App;
