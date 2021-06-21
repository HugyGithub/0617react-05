import { useDispatch } from "react-redux";
import { memo, useState, useEffect, useRef } from "react";
function TodoItem({ data }) {
    const { id, title, done } = data;
    const [isEdit, setIsEdit] = useState(false);
    const [initEditVal, setInitEditVal] = useState(title)
    const dispatch = useDispatch();
    const editInput = useRef();
    const editCompleted = () => {
        if (initEditVal.trim()) {
            dispatch({
                type: 'editCompleted',
                id,
                title: initEditVal
            })
        } else {
            setInitEditVal(title)
        }
        setIsEdit(false)
    }
    useEffect(() => {
        editInput.current.focus()
    }, [isEdit])
    console.log(id, ".TodoItem render")
    return (
        <li className={isEdit ? "editing" : ""} >
            <div className={done ? "todo done" : "todo"}>
                <div className="display">
                    <input
                        className="check"
                        type="checkbox"
                        checked={done}
                        onChange={({ target }) => {
                            // console.log(target.checked);
                            dispatch({
                                type: "changeDone",
                                id,
                                done: target.checked
                            })
                        }} />
                    <div className="todo-content" onDoubleClick={() => {
                        setIsEdit(true)
                    }} >{title}</div>
                    <span className="todo-destroy" onClick={() => {
                        dispatch({
                            type: "remove",
                            id
                        })
                    }} ></span>
                </div>
                <div className="edit">
                    <input
                        className="todo-input"
                        type="text"
                        ref={editInput}
                        value={initEditVal}
                        onChange={({ target }) => {
                            setInitEditVal(target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                editCompleted()
                            }
                        }}
                        onBlur={() => {
                            editCompleted()
                        }}
                    />
                </div>
            </div>
        </li>
    )
}

export default memo(TodoItem, (props, newProps) => props.data === newProps.data)