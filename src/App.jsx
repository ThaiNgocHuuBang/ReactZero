import "./component/todo/todo.css";
import TodoData from "./component/todo/TodoData";
import TodoNew from "./component/todo/TodoNew";
import todoLogo from "./assets/react.svg";
const App = () => {
  const name = "Bang";
  const age = 20;
  const data = {
    address: "BinhDinh",
    country: " Vietnam",
  };
  const addNewTodo = (name) => {
    alert(`name: ${name}`);
  };

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoNew addNewTodo={addNewTodo} />
      <TodoData name={name} age={age} data={data} />

      <div className="todo-img">
        <img src={todoLogo} alt="" />
      </div>
    </div>
  );
};

export default App;
