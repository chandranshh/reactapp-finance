import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    let titleValue = event.target.value;
    setEnteredTitle(titleValue);
  }

  function amountChangeHandler(event) {
    let amountValue = event.target.value;
    setEnteredAmount(amountValue);
  }
  function dateChangeHandler(event) {
    let dateValue = event.target.value;
    setEnteredDate(dateValue);
  }

  function submitHandler(event){
    event.preventDefault();
    
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    
    console.log(expenseData);
  }
  /*const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  function titleChangeHandler(event) {
    let titleValue = event.target.value;
    setUserInput({
      ...userInput,
      enteredTitle: titleValue,
    });
  }

  function amountChangeHandler(event) {
    let amountValue = event.target.value;
    setUserInput({
      ...userInput,
      enteredAmount: amountValue,
    });
  }

  function dateChangeHandler(event) {
    let dateValue = event.target.value;
    setUserInput({
      ...userInput,
      enteredDate: dateValue,
    });
  }*/

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="date"
            min="2019-01-01"
            amx="2055-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
