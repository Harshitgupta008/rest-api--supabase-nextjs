import { createSlice } from "@reduxjs/toolkit";

interface Navtype {
    navStatus: boolean;
}

export const initialState: Navtype = {
    navStatus: false,
}

const sideSlice = createSlice({
    name: "navslice",
    initialState,
    reducers: {
        IsOpenNav: (state) => {
            state.navStatus = !state.navStatus;
        }
    }
})

export const { IsOpenNav } = sideSlice.actions;
export default sideSlice.reducer;