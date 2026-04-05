import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const TodoDetails = () => {
  const { id } = useParams();
  const { todos } = useOutletContext();
  const todo = todos[id];

  const navigate = useNavigate();
  if (!todo) {
    return (
      <div data-aos="zoom-out-right" className="container">
        <h2>To do not found check your url</h2>
      </div>
    );
  }

  return (
    <div data-aos="zoom-out-right" className="container">
      <h2 data-aos="zoom-out-right">{todo.title}</h2>
      <p data-aos="zoom-out-left">{todo.desc}</p>
      <button
        data-aos="fade-down"
        className="btn"
        onClick={() => navigate("/todos")}
      >
        Back
      </button>
    </div>
  );
};

export default TodoDetails;
