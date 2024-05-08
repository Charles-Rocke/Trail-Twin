import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../lib/supabase";

// Login action
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    return user;
  }
);

// update User session
export const updateUserSession = createAsyncThunk(
  "auth/updateUserSession",
  async (userSession) => {
    // You can return the userSession object directly since it already contains the necessary information
    return userSession;
  }
);

// Logout action
export const logout = createAsyncThunk("auth/logout", async () => {
  const { error } = await supabase.auth.signOut();
  return null;
});

// Fetch user details action
export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (userId) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) throw error;
    return data;
  }
);

// Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
};

// Slice definition
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {}, // No reducers needed for async thunks
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(updateUserSession.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
