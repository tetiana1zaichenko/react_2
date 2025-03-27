import { useState } from "react";
import todosData from "./../../assets/todos.json";
import s from "./TodoList.module.css";
import { TodoItem } from "./TodoItem";
export const TodoList = () => {
  const [todos, setTodos] = useState(todosData);
  const [todoValue, setTodoValue] = useState("");
  const hendleDeleteTodo = (id) => {
    const newDate = todos.filter((item) => item.id !== id);
    setTodos(newDate);
  };
  const addTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      todo: todoValue,
    };
    setTodos([...todos, newTodo]);
    setTodoValue("");
  };
  return (
    <div>
      <div className="flex">
        <input
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          className={s.input}
        />
        <button onClick={addTodo} className="btn border">
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((item) => (
          <TodoItem onDelete={hendleDeleteTodo} key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
