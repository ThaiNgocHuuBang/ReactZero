const TodoNew = (prpos) => {
  console.log(prpos);
  const { addNewTodo } = prpos;
  addNewTodo(`bang`);
  return (
    <div className="todo-new">
      <input placeholder="Enter your task" type="text" />
      <button>ADD</button>
    </div>
  );
};
export default TodoNew;
