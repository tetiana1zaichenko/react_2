import Colorpicker from "./components/Colorpicker/Colorpicker";
// import Header from "./Header/Header";
// import { TodoList } from "./TodoList/TodoList";
import { Counter } from "./components/Counter/Counter";
import Voting from "./components/Voting/Voting";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Counter />
      <Colorpicker />
      <Voting />
      {/* <TodoList /> */}
    </div>
  );
};
export default App;
