
import React,{useState} from 'react';
import './App.css';
import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpenses/NewExpense'
import { useLocalStorage } from './hooks/useLocalStorage';

let DUMMY__EXPENSE=[
 
 ];

function App() {
  //state is use in order to get the data that this component requires
    const[expenses,setExpenses]=useLocalStorage("expenses"); 

   // console.log(expenses)
    
     const addExpenseHandler=(expense)=>{
      
       const updatedExpense=[expense,...expenses]
      setExpenses(updatedExpense)
     } 

  return (
      <div>
         <NewExpense onAddExpense={addExpenseHandler}/>
         <Expenses item={expenses}  />
      </div>
  );
}

export default App;
