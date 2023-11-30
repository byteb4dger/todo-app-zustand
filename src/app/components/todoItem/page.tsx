import { Todo, useTodoStore } from "@/store/todo.store";
import { MdDelete } from "react-icons/md";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { editTodo, removeTodo, toggleTodo } = useTodoStore((state) => state);
  return (
    <li className="mb-2 flex justify-center rounded-md bg-secondary-700 p-2 align-middle">
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        className="mr-2"
        onClick={() => toggleTodo(todo.id)}
      />
      <input
        className={`flex-1 bg-transparent ${
          todo.completed ? "line-through" : ""
        }`}
        value={todo.title}
        onChange={(e) => editTodo(todo.id, e.target.value)}
      ></input>
      <button onClick={() => removeTodo(todo.id)}>
        <MdDelete></MdDelete>
      </button>
    </li>
  );
};

export { TodoItem as default };
