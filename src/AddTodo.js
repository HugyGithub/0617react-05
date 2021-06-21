import { useDispatch } from "react-redux";
function AddTodo() {
    const dispatch = useDispatch()
    return (
        <div id="create-todo">
            <input
                id="new-todo"
                placeholder="What needs to be done?"
                autoComplete="off" type="text"
                onKeyDown = {(e)=>{
                    //console.log(e.keyCode);
                    const title = e.target.value;
                    if(e.keyCode === 13){
                        if(!title.trim()){
                            console.log("添加的Todo不能为空")
                            return 
                        }
                        dispatch({
                            type:"add",
                            title
                        })
                    }
                }}
            />
        </div>
    )
}
export default AddTodo