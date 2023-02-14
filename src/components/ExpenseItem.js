import "./ExpenseItem.css";

function ExpenseItem() {
    let expenseDate = new Date(2023,1,14);
    let expenseTitle = "Car Insurance"
    let expenseAmount = 100
    let locationOfExpenditure = "New York, NY"
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2 className="expense-item">{expenseTitle}</h2>
        <h2 className="expense-item">{locationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
