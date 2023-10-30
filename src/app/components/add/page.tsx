import { useTodoStore } from "@/store/todo.store";
import { useState } from "react";

const Add = () => {
  const [value, setValue] = useState<string>("");
  const { addTodo, todos } = useTodoStore((state) => state);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({
          id: todos.length + 1,
          title: value,
          completed: false,
        });
        setValue("");
      }}
    >
      <fieldset className="flex justify-center gap-x-4 p-5">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="text-background-950 rounded-lg p-2 text-xl"
        />
        <button className="bg-secondary-700 rounded-lg p-3" type="submit">
          Add Todo
        </button>
      </fieldset>
    </form>
  );
};

export default Add;
