function TodoItem1() {

  let todoName = 'Buy Milk';
  let tododate = '4/10/2023';
  return (
     <div class="container" >
      

    
    <div className=" row Ak-row">
      <div className="col-6">{todoName}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger Ak-button item-btn">
          Delete
        </button>
      </div>
    </div>
    </div>
   
  );
}
export default TodoItem1;
