import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./reducers.ts";

const store = configureStore({
    reducer: rootReducers
})

export default store
