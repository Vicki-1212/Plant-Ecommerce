import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state = initialState, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            state.splice(action.payload, 1);
        },
    }
});

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer;