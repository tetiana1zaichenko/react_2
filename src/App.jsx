import Colorpicker from "./components/Colorpicker/Colorpicker";
// import Header from "./Header/Header";
import { Counter } from "./components/Counter/Counter";
import { TodoList } from "./components/TodoList/TodoList";
import Voting from "./components/Voting/Voting";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <Counter />
      <Colorpicker />
      <Voting />
      <TodoList />
    </div>
  );
};
export default App;
