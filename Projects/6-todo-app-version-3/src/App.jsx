import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this Course",
  //     dueDate: "4/10/2025",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added:${itemName}  Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };
 const handleDeleteItem = (todoItemName) =>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
  setTodoItems(newTodoItems);
  console.log(`Item Deleted:${todoItemName}`);
  

 }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewItem} />
      {todoItems.length === 0 &&   <WelcomeMessage></WelcomeMessage>}
    
      <TodoItems todoItems={todoItems}onDeleteClick ={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
