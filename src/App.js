import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Summary from "./Summary";
import Count from "./Count";

function App() {
  return (
    <div id="todoapp">
      <div className="title">
        <h1>todo</h1>
      </div>
      <div className="content">
        <AddTodo />
        <Todos />
        <Summary />
        <Count />
      </div>
    </div>
  );
}
export default App;
