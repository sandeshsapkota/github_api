import {combineReducers} from "redux";
import listSlice from "./slices/list.slice.ts";

const rootReducers = combineReducers({
    list: listSlice.reducer
})

export default rootReducers
