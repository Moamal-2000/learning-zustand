import { useGlobalStore } from "../../../../Store/global.store";

const Todos = () => {
  const { todos, toggleTodo, removeTodo } = useGlobalStore();
  return (
    <div data-type="todos">
      {todos.map(({ id, text, isCompleted }) => {
        function handleToggleTodo() {
          toggleTodo(id);
        }

        function handleRemoveTodo() {
          removeTodo(id);
        }

        return (
          <div data-type="todo" key={id}>
            <input
              type="checkbox"
              value={isCompleted}
              checked={isCompleted}
              onChange={handleToggleTodo}
            />

            <p>{text}</p>

            <button type="button" onClick={handleRemoveTodo}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
