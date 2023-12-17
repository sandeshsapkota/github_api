import {combineReducers} from "redux";
import repositorySlice from "./slices/repository.slice.ts";

const rootReducers = combineReducers({
    list: repositorySlice.reducer
})

export default rootReducers
