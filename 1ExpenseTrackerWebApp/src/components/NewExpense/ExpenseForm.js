import "./ExpenseForm.css";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: ''
  // });  // pass in an object as a value

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // target: input and the value is always a string
    // Alternative1: setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // }) // depending on previous state to copy in the existing values then override one value
    // Alternative2: setUserInput((prevState) => {
    //    return { ...prevState, enteredTitle: event.target.value};
    // });  // prevState is the latest state snapshot
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // default javaScrip behavior. prevent the default of this request being sent so the page will not reload.

    var getDate = enteredDate;
    getDate = getDate.split("-").join("/"); // https://stackoverflow.com/questions/9509360/datepicker-date-off-by-one-day

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,  //enforce a string to number conversion
      date: new Date(getDate),
    };

    props.onSaveExpenseData(expenseData); // 59. child-to-parent component communication, pass the data as an argument

    // clear the input
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__control">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
