import "./ExpenseItem.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2 className="expense-item">{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  );
}

export default ExpenseDetails;
