import { create } from "zustand";

export const useGlobalStore = create((set) => ({
  todos: [],
  addTodo: (todoText) => {
    set(({ todos }) => {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
        isCompleted: false,
      };
      const updatedTodos = [...todos, newTodo];

      return { todos: updatedTodos };
    });
  },
  removeTodo: (todoId) => {
    set(({ todos }) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      return { todos: updatedTodos };
    });
  },
  toggleTodo: (todoId) => {
    set(({ todos }) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      return { todos: updatedTodos };
    });
  },
}));
