import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItems = [{
    name: "Buy Milk",
    dueDate: "4/10/2023"
  },
{
    name: "Go to College",
    dueDate: "4/10/2023"
  },
{
    name: "Like this Course",
    dueDate: "4/10/2025"
  }];

  const [todoItems, setTodoItems] =useState(initialTodoItems);

  const onNewItem = (itemName, itemDueDate) =>{
console.log(`New Item Added : ${itemName} Date: ${itemDueDate}`);

  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo  onNewItem ={onNewItem}/>
      <TodoItems todoItems ={todoItems}></TodoItems>
     
    </center>
  );
}

export default App;
