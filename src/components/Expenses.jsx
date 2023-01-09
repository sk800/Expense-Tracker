import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
const Expenses = (props) => {
  return (
    <div className='expenses'>

       {
        props.item && props.item.map(
          expense =>(
            <ExpenseItem
             key={expense.id}
             date={expense.date} 
             tittle={expense.tittle} 
             amount={expense.amount}/>
          )
         )
       }

         

     

    </div>
  )
}

export default Expenses