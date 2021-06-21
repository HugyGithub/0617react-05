import { useSelector, useDispatch } from "react-redux";

function Count() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    console.log( "Count component render")
    return (
        <div className="count-bar">
            <button onClick={() => {
                dispatch({
                    type: "mius",
                    nub: 1
                })
            }} > - </button>
            <span> {count} </span>
            <button onClick={() => {
                dispatch({
                    type: "plus",
                    nub: 5
                })
            }} > + </button>
        </div>
    )
}

export default Count