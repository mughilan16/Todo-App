import { useRecoilState } from "recoil";
import { todoList } from "./atom/todo";
import TodoApp from "./components/TodoApp";

function App() {
  const [todosList, setTodoList] = useRecoilState(todoList);
  return <TodoApp />;
}

export default App;
