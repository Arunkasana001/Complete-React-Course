import { useContext, useRef } from "react";
import { MdAddTask } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [duedate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  // };
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;

    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on ${dueDate}`);

    addNewItem(todoName, dueDate);
    event.currentTarget.reset();
    // setDueDate("");
    // setTodoName("");
  };
  // addNewItem('');
  return (
    <div className="container text-center">
      <form className="row Ak-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here.."

            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}

            // value={duedate}
            //  onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success Ak-button add-btn">
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
