import { useSelector,useDispatch } from "react-redux";
function Summary() {
    const { list } = useSelector(state=>state.data);
    const dispatch = useDispatch();
    const completedNub = list.filter( item => item.done === true ).length;
    return (
        <div id="todo-stats">
            <p className="todo-count">
                <span className="number"> { list.length - completedNub } </span><span className="word">项待完成</span>
            </p>
            <p className="todo-clear" onClick={()=>{
                dispatch({
                    type:"clear"                   
                })
            }} ><span>Clear <i> {completedNub} </i> 已完成事项</span></p>
        </div>
    )
}

export default Summary;