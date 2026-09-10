import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

import TodoItems from "./components/TodoItems";
import { useReducer } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName,
    );
  }

  return newTodoItems;
};

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

  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    // console.log(`New Item Added:${itemName}  Date:${itemDueDate}`);
    // const newTodoItems = [
    //   ...todoItems,
    //   { name: itemName, dueDate: itemDueDate },
    // ];
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
    // setTodoItems(newTodoItems);
  };
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName:todoItemName,
      },
    };
      dispatchTodoItems(deleteItemAction);
  };


  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo
        //  onNewItem={onNewItem}
        />
        <WelcomeMessage
        //  todoItems={todoItems}
        ></WelcomeMessage>

        <TodoItems
        // todoItems={todoItems}
        // onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
