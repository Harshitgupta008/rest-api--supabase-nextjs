import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice/authSlice";
import sidenavReducer from "../feature/sidenavSlice/sidenavSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        sidenav: sidenavReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;