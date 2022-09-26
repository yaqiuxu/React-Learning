import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
  const expenses = props.items;

  const [selectedYear, setSelectedYear] = useState("2022");

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  const saveSelectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedYear}
          onSaveSelectedYear={saveSelectedYearHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        <ExpenseList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
