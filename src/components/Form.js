import React from "react";

const Form = ({
  setInputText,
  todos,
  setTodos,
  inputText,
  itemCount,
  setItemCount,
}) => {
  // here i can write JavaScript code, function
  const inputTextHandler = (e) => {
    setInputText(e.target.value);

    // e.target.value jest parametrem funkcji setInputText, wstrzykujemy nasze pobrane informacje do tej funkcji - set!
  };

  const inputNumberHandler = (e) => {
    setItemCount(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      text: inputText,
      count: itemCount,
      completed: false,
      id: Math.random() * 1000,
    };
    if (itemCount >= 1) {
      setTodos([
        ...todos,
        newTodo,
        // Here should be unique number
      ]);
      setInputText("");
      setItemCount("");
    } else {
      alert("Liczba musi być dodatnia");
    }
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        // value="123"
        className="todo-input"
      />

      <h3>Ile?</h3>
      <input
        className="todo-count"
        type="number"
        value={itemCount}
        onChange={inputNumberHandler}
      ></input>
      {/* Za kadym razem, gdy coś w inpucie się zmieni, uruchomi się funkcja inputTextHandler */}
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
