import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items-container">
        <TodoItem todoName="Buy Milk" todoDate="4/10/2023"></TodoItem>
      </div>
      <div className="items-container">
        <TodoItem todoName="Go to College" todoDate="4/10/2023"></TodoItem>
      </div>
      \
    </>
  );
};
export default TodoItems;
