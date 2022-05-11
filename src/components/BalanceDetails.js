//important the hooks to be able to dispatch,useSelector need to be in the root of the project
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
//importing the action
import { deposit, withdraw, reset } from "../store/balance/slice";
import { registerTransaction } from "../store/transaction/slice";
import { selectBalance } from "../store/balance/selectors";

function BalanceDetails() {
  //inside the function calls the dispatch
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  //custom deposit
  const [customAmount, setCustomAmount] = useState(0);

  return (
    <div className="Button">
      <h1>Balance : {balance}$</h1>
      <button
        onClick={() => {
          //inside de button calls the action , the logic
          dispatch(deposit(10));
          dispatch(registerTransaction(10));
        }}
      >
        Deposit 10$
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(withdraw(10));
          dispatch(registerTransaction(-10));
        }}
      >
        Withdraw 10$
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
      <br />
      {/* text input */}
      <input
        type="number"
        value={customAmount}
        onChange={(e) => {
          setCustomAmount(parseInt(e.target.value));
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch(deposit(customAmount));
          dispatch(registerTransaction(customAmount));
          setCustomAmount(0);
        }}
      >
        Deposit custom amount
      </button>
    </div>
  );
}

export default BalanceDetails;
