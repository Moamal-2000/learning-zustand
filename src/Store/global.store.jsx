import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const baseStore = (set) => ({
  todos: [],
  addTodo: (todoText) =>
    set(({ todos }) => {
      const newTodo = {
        id: new Date().getTime(),
        text: todoText,
        isCompleted: false,
      };
      const updatedTodos = [...todos, newTodo];

      return { todos: updatedTodos };
    }),
  removeTodo: (todoId) =>
    set(({ todos }) => {
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      return { todos: updatedTodos };
    }),
  toggleTodo: (todoId) =>
    set(({ todos }) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );

      return { todos: updatedTodos };
    }),
});

export const useGlobalStore = create(
  devtools(persist(baseStore), { name: "todos-list" })
);
