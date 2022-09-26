import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
  //not really HTML, it's JSX syntax and still JavaScript code. 'class' is a reserved name in JavaScript
  //in onClick: we just point at the clickHandler (a pointer at this function), not execute it (like clickHandler()).
}

export default ExpenseItem;
