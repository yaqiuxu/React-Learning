import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData); // 59. chlid-to-parent component communication
    setIsEditing(false);
  };

  const onClickHandler = () => setIsEditing(true);

  const setCancel = () => setIsEditing(false);

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={onClickHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={setCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
