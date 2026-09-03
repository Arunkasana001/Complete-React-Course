function TodoItem({ todoName, todoDate }) {
  return (
    <div class="container">
      <div class=" row Ak-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger Ak-button item-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
