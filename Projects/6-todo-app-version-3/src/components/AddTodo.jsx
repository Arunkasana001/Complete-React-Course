import { useState } from "react";
import { MdAddTask } from "react-icons/md";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [duedate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, duedate);
    setDueDate("");
    setTodoName("");
  };
  return (
    <div className="container text-center">
      <form className="row Ak-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo here.."
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={duedate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success Ak-button add-btn"
            onClick={handleAddButtonClicked}
          >
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
