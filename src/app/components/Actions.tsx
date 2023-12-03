import { useTodoStore } from "@/store/todo.store";
import React from "react";

const Actions = () => {
  const { loadTodos, resetStore } = useTodoStore((state) => state);

  return (
    <div className="flex flex-row justify-around pb-5">
      <button className="rounded-lg bg-secondary-700 p-3" onClick={loadTodos}>
        Load Todo
      </button>
      <button className="rounded-lg bg-secondary-700 p-3" onClick={resetStore}>
        Remove Todos
      </button>
    </div>
  );
};

export default Actions;
