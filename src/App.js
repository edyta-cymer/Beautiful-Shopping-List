import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  // Chcę gdzieś w dół przeprowadzić setInputText, poniewaz jest to funkcja,
  //  ktora zaaktualizuje mnie stan inputText
  const [todos, setTodos] = useState([]);
  const [itemCount, setItemCount] = useState();

  React.useEffect(() => {
    console.log("itemCount new value:", itemCount);
  }, [itemCount]);

  return (
    <div className="App">
      <header>
        <h1>SHOPPING LIST 🛒</h1>
      </header>
      <span className="span-header">
        Czego dzisiaj potrzebujesz?
        <br />{" "}
      </span>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        itemCount={itemCount}
        setItemCount={setItemCount}
      />
      {/* Przekazuję funkcję jako props w doł, zeby miec dostep do tych danych w Form.js */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        itemCount={itemCount}
      />
    </div>
  );
}

export default App;

// Dosłownie mająć teraz inputText, mona go sobie uzywac wszedzie, tylko trzeba go dobrze przekazac
// Mogę sobie do h1 wrzucić inputa i wtedy cokolwiek nie napiszę w moim inpucie automatycznie pojawi się w h1
