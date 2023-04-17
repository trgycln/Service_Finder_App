import { combineReducers, createStore } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";


const rootReducer = combineReducers({
 categoryState : categoryReducer
})

const store = createStore(rootReducer)

export default store