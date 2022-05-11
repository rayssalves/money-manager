import { useSelector } from "react-redux";
import { selectTransactions } from "../store/transaction/selector";

function TransactionHistory() {
  const transactions = useSelector(selectTransactions);
  console.log(transactions);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction}
            //this is a conditional className: https://www.pluralsight.com/guides/applying-classes-conditionally-react
            className={`${
              //.toString() transform numbers into strings '-1000'
              transaction.toString().startsWith("-")
                ? "negative-value"
                : "positive-value"
            }`}
          >
            {transaction}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionHistory;
