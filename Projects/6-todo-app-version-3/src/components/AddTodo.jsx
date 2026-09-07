function AddTodo({onNewItem}){
  return (
  <div className="row Ak-row">
          <div className="col-6"><input type="text" placeholder="Enter Todo here.." /></div>
          <div className="col-4"><input type="date" /></div>
          <div className="col-2"><button type="button" class="btn btn-success Ak-button add-btn" onClick={() => onNewItem('a', 'b')}>Add</button></div>
        </div>
  )
}

export default AddTodo;