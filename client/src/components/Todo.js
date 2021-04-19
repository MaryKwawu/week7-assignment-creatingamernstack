import { useState, useEffect } from "react";
import "./Todo.css";

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const response = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });
  const data = await response.json();
  return data;
};

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuery({ uri: " http://localhost:4000/todos" });
      // const data = await response.json();
      setTodos(data.todos);
    };
    fetchData();
  }, [todos]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const newTodo = {
      text: todo,
      completed: false,
    };

    // const response = await fetch("http://localhost:4000/todos", {
    //   method: "POST",
    //   headers: {
    // "Content-Type": "application/json",
    //  "Authorization": "Bearer eylals"
    // },
    // body: JSON.stringify(newTodo),

    const data = await fetchQuery({
      uri: "http://localhost:4000/todos",
      method: "POST",
      body: newTodo,
    });
    //  const data = await response.json();
    setTodos([...todos, data.todo.text]);
  };

  const toggleCompleted = async (id) => {
    fetchQuery({
      uri: `http://localhost:4000/todos/${id}/toggle`,
      method: "PATCH",
    });
  };
  const deleteTodo = async (id) => {
    await fetchQuery({
      uri: `http://localhost:4000/todos/${id}`,
      method: "Delete",
    });
  };

  return (
    <div className="todo">
      <div>
        <form className="form" onSubmit={submitHandler}>
          <input
            className="input"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="submit" type="submit">
            Add Todo
          </button>
        </form>
        <ul className="todos">
          {todos.map((todo, id) => (
            <li className="toggle" key={todo._id}>
              <span>{todo.text}</span>
              <br />
              <div className="buttons">
                <button onClick={() => toggleCompleted(todo._id)}>
                  {todo.completed ? "Completed" : "Incomplete"}
                </button>
                <button>Edit</button>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
