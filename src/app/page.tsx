"use client";

import Actions from "./components/actions/page";
import Add from "./components/add/page";
import { useTodoStore } from "@/store/todo.store";
import TodoItem from "./components/todoItem/page";

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
