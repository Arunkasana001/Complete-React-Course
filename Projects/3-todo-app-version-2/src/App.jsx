import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";
import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoName ="Buy Milk" todoDate= "4/10/2023"></TodoItem>
        <TodoItem1 />
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
}

export default App;
