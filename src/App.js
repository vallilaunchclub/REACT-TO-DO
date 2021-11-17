
import React from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  
  return (
     <div
     className="todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "ORGANIZING OFFICE",
      isCompleted: false
    },
    {
      text: "DESIGNING INFRASTRUCTURE",
      isCompleted: false
    },
    {
      text: "ESTABLISHING ELECTRICAL CONNECTIONS",
      isCompleted: false
    },
    {
      text: "SETTING UP VENDOR MACHINE",
      isCompleted: false
    },
    {
      text: "ENABLING CARD ACCESS CONTROL",
      isCompleted: false

    },
    {
      text: "ISSUING LAPTOPS",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h1> TO DO </h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;