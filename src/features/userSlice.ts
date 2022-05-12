import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../interfaces/user";

const initialState:UserInterface = {
    id: 0,
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accessToken: '',
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state, action: PayloadAction<UserInterface>) => {
        state.email = action.payload.email;
      }
    }
  });
  
  export const { login } = userSlice.actions;
  
  export default userSlice.reducer;