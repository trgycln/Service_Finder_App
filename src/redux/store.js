import { combineReducers, createStore } from "redux";
import { categoryReducer } from "./reducers/categoryReducer";
import userDataReducer from "./reducers/userDataReducer";


const rootReducer = combineReducers({
 categoryState : categoryReducer,
 userDataState:userDataReducer
})

const store = createStore(rootReducer)

export default store