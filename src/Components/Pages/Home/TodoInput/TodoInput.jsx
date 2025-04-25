import { useState } from "react";
import { useGlobalStore } from "../../../../Store/global.store";

const TodoInput = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useGlobalStore();

  function handleAddTodo(e) {
    e.preventDefault();
    addTodo(todoText);
    setTodoText("");
  }

  return (
    <form data-type="inputWrapper" onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Add your task"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />

      <button type="submit" className="addTodoBtn">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
