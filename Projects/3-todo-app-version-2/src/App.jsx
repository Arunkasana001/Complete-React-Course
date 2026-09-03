import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoName ="Buy Milk" todoDate= "4/10/2023"></TodoItem>
        </div>
      <div className="items-container">
        <TodoItem todoName ="Go to College" todoDate= "4/10/2023"></TodoItem>
</div>
       
    
    </center>
  );
}

export default App;
