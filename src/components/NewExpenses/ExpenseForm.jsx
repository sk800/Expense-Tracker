import { eventWrapper } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle,setenteredTitle]=useState("");
  const [enteredamount,setenteredamount]=useState("");
  const [enteredDate,setenteredDate]=useState("");

  const titlechangeHandler=(event)=>{
    setenteredTitle(event.target.value)
  }
  const amountchangeHandler=(event)=>{
    setenteredamount(event.target.value)
  }
  const DatechangeHandler=(event)=>{
    setenteredDate(event.target.value)
  }
  
  const submithandler=(event)=>{
    event.preventDefault()
    console.log()
    const expenseData={
        tittle:enteredTitle,
        amount:enteredamount,
        date:enteredDate
    }

    props.onSaveExpenseData(expenseData);

    setenteredTitle('');
    setenteredamount('');
    setenteredDate('');  
  }

  return (
    <form onSubmit={submithandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titlechangeHandler}></input>
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input type='Number' value={enteredamount} min='0.01' step='0.01' onChange={amountchangeHandler}></input>
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' value={enteredDate} onChange={DatechangeHandler}></input>
          </div>
        </div>
        <div className='new-expense__action'>
             <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm