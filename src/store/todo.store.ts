import { create } from "zustand";

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

interface TodoStore {
  todos: Todo[] | [];
  addTodo: (todo: Todo) => void;
  loadTodos: () => Promise<void>;
  resetStore: () => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, title: string) => void;
}

export const useTodoStore = create<TodoStore>()((set) => ({
  todos: [],

  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),

  loadTodos: async () => {
    const respone = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data: Todo[] = await respone.json();
    set({ todos: data });
  },

  resetStore: () => set({ todos: [] }),

  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    })),

  editTodo: (id, title) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, title } : todo,
      ),
    })),
}));
