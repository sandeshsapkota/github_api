import {configureStore} from "@reduxjs/toolkit"
import rootReducers from "./reducers.ts";

const store = configureStore({
    reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>;

export default store
