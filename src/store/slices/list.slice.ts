import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
    message: 'hello world'
}

const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        setMessage(state, action) {
            state.message = action.payload
        }
    }
})

export const {setMessage} = listSlice.actions

export default listSlice

