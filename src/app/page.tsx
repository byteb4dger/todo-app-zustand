"use client";

import Actions from "./components/Actions";
import Add from "./components/Add";
import TodoItem from "./components/TodoItem";
import { useTodoStore } from "@/store/todo.store";

export default function Home() {
  const { todos } = useTodoStore((state) => state);

  return (
    <main className="flex flex-col gap-y-10">
      <section className="flex h-auto w-auto flex-col justify-center self-center rounded-lg bg-primary-500">
        <Add />
        <Actions />
      </section>
      <section>
        <ul className="flex h-auto w-auto flex-col justify-center self-center rounded-lg bg-inherit">
          {todos.length < 1
            ? "No Todos"
            : todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
      </section>
    </main>
  );
}
