import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function Todos() {
    const { list } = useSelector(state => state.data);
    //console.log(list)
    return (
        <ul id="todo-list">
            {list.map(item => <TodoItem key={item.id} data={item} />)}
        </ul>
    )
}
export default Todos