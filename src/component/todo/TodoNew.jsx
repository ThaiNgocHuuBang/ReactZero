const TodoNew = (prpos) => {
  console.log(prpos);
  const { addNewTodo } = prpos;
  // addNewTodo(`bang`);
  const handleClick = () => {
    alert("click me");
  };
  // const handleChange = (event) => {
  //   console.log("onchange", event.target.value);
  // };
  const handleChange = (name) => {
    console.log("onchange", name);
  };
  return (
    <div className="todo-new">
      <input
        onChange={(event) => {
          handleChange(event.target.value);
        }}
        placeholder="Enter your task"
        type="text"
      />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};
export default TodoNew;
