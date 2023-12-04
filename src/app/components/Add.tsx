"use client";

import { useTodoStore } from "@/store/todo.store";
import { useState } from "react";

const Add = () => {
  const [value, setValue] = useState<string>("");
  const { addTodo, todos } = useTodoStore((state) => state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Description is required.");
      return;
    }

    addTodo({
      id: todos.length + 1,
      title: value,
      completed: false,
    });

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="flex justify-center gap-x-4 p-5">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="rounded-lg p-2 text-xl text-background-950"
        />
        <button className="rounded-lg bg-secondary-700 p-3" type="submit">
          Dodaj Todo
        </button>
      </fieldset>
    </form>
  );
};

export default Add;
