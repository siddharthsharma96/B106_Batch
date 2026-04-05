import { useNavigate, useOutletContext } from "react-router-dom";

const ToDoList = () => {
  const { todos } = useOutletContext();
  const navigate = useNavigate();
  return (
    <div className="container">
      <h2>My Todos </h2>
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        todos.map((todo, index) => {
          return (
            <div className="card">
              <h3>{todo.title}</h3>
              <button
                className="btn-small"
                onClick={() => navigate(`/todo/${index}`)}
              >
                View ToDo Desc
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ToDoList;
