import { createSlice } from "@reduxjs/toolkit";

interface UserDataType {
  email: string;
  email_verified: boolean;
  name: string;
  number: string;
  phone_verified: boolean;
  place: string;
  sub: string;
}

interface LoginState {
    isLoggedIn: boolean;
    user: UserDataType |null;
}

const initialState:LoginState = {
    isLoggedIn: false,
    user: null, 
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setLoginState: (state, action) => {
        state.isLoggedIn = action.payload.isLoggedIn;
        state.user = action.payload.user;
      },
      logoutState: (state) => {
        state.isLoggedIn = false;
        state.user = null;
      },
    },
  });
  
  export const { setLoginState, logoutState } = authSlice.actions;
  export default authSlice.reducer;