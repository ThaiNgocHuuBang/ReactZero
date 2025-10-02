const TodoData = (prpos) => {
  const { name, age, data } = prpos;
  console.log(prpos);
  return (
    <div className="todo-data">
      <div>Learning Code</div>
      <div>Learning English 111</div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{data.address}</div>
    </div>
  );
};
export default TodoData;
