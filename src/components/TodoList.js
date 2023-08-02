import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos, inputText, setTodos, itemCount }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            id={todo.id}
            count={todo.count}
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            itemCount={itemCount}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
