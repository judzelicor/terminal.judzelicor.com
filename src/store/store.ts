import {
    createStore,
    combineReducers
} from "redux";
import {
    activeSessionReducer
} from "../reducers";

export const store = createStore(combineReducers({
    activeSession: activeSessionReducer
}));