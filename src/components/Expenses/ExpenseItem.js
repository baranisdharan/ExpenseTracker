import React , {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import Card from './../UI/Card';

const ExpenseItem = (props) => {  
  let [ title , setTitle ] = useState(props.title)
  let [ amount , setAmount ] = useState(props.amount)
  let clickHandler = () => {
    setTitle("updated")
  }
  let clickHandler2 = () => {
    setAmount("100")
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} title={title} />
      <button onClick={clickHandler}>Change Title</button> 
      <button onClick={clickHandler2}>Expense Changer</button>  
    </Card>
  );
}

export default ExpenseItem;
