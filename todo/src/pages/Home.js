import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Home = () => {
  const { todos, addTodo } = useOutletContext();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigate = useNavigate();

  //   useEffect(() => {
  //     console.log("my callback function is running");
  //     console.log(title, "title");
  //     console.log(desc, "desc");
  //   }, [desc]);

  const handleAdd = () => {
    addTodo({ title, desc });
    setTitle("");
    setDesc("");
    navigate("/todos");
  };

  return (
    <div className="container">
      <h2 data-aos="zoom-in">Add new Todo</h2>
      <input
        className="input"
        type="text"
        placeholder="Enter your Todo Title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <textarea
        className="textarea"
        placeholder="Enter Your ToDO Descritpion"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button data-aos="zoom-in-up" onClick={handleAdd} className="btn">
        Add Todo
      </button>
    </div>
  );
};

export default Home;
