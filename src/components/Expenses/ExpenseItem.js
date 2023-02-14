import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from './../UI/Card';

const ExpenseItem = (props) => {  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={props.amount} title={props.title} />
      <button onClick={()=> console.log("Deleted")}>Delete Expense</button>   
    </Card>
  );
}

export default ExpenseItem;
