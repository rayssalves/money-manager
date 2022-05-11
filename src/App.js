import "./App.css";
import BalanceDetails from "./components/BalanceDetails";
import TransactionHistory from "./components/TransactionsHistory";

function App() {
  return (
    <div className="App">
      <BalanceDetails />
      <hr></hr>
      <TransactionHistory />
    </div>
  );
}

export default App;
