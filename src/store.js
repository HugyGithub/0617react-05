import { createStore,combineReducers } from "redux";
import { data } from "./reducer/todoData";
import { count } from "./reducer/count";

// console.log(count,data)

// console.log(data)

// const store = createStore( combineReducers({data,count}) );

export default createStore( combineReducers({data,count}) )