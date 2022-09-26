import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Target",
    amount: 113.56,
    date: new Date(2022, 8, 11),
  },
  { id: "e2", title: "Lyft Ride", amount: 12.97, date: new Date(2022, 8, 8) },
  {
    id: "e3",
    title: "Nike Air Force1",
    amount: 120.31,
    date: new Date(2022, 6, 23),
  },
  {
    id: "e4",
    title: "SEVIS fee",
    amount: 160,
    date: new Date(2021, 9, 22),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
