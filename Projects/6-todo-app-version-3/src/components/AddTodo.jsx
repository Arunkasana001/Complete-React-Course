import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [duedate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () =>{
onNewItem(todoName,duedate );
setDueDate("");
setTodoName("");
  }
  return (
    <div className="row Ak-row">
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
          type="button"
          className="btn btn-success Ak-button add-btn"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
