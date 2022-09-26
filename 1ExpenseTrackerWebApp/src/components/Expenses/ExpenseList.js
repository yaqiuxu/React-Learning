import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {

  if (props.filteredExpenses.length === 0){
    return <h2 className='expenses-list__fallback'>No Expenses Found</h2>
  }

  return (
    <ul className="expenses-list">
      {
        (props.filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        )))
      }
    </ul>
  );
};

export default ExpenseList;
