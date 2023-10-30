import { useTodoStore } from "@/store/todo.store";

const Actions = () => {
  const { loadTodos, resetStore } = useTodoStore((state) => state);

  return (
    <div className="flex flex-row justify-around pb-5">
      <button className="bg-secondary-700 rounded-lg p-3" onClick={loadTodos}>
        Load Todo
      </button>
      <button className="bg-secondary-700 rounded-lg p-3" onClick={resetStore}>
        Remove Todos
      </button>
    </div>
  );
};

export default Actions;
