import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../../lib/supabase";

export const updateUserSession = createAsyncThunk(
  "auth/updateUserSession",
  async (userSession) => {
    // Assuming userSession contains the necessary user data
    return {
      id: userSession.id,
      email: userSession.email,
      role: userSession.role,
      confirmedAt: userSession.confirmed_at,
    };
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch }) => {
    try {
      const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw new Error(error.message);

      if (user) {
        // Dispatch updateUserSession action right here after successful login
        dispatch(
          updateUserSession({
            id: user.id,
            email: user.email,
            role: user.role,
            confirmedAt: user.confirmed_at,
          })
        );
      }
    } catch (error) {
      // You can also handle errors more elegantly here, potentially dispatching another action for errors
      throw new Error("Login failed: " + error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  const { error } = await supabase.auth.signOut();
  console.log("Error in logout thunk", error);
  if (error) throw new Error(error.message);
  return null;
});

export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async (userId) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", userId)
      .single();
    if (error) throw new Error(error.message);
    return data;
  }
);

const initialState = {
  isAuthenticated: false,
  user: {
    id: null,
    email: null,
    role: null,
    confirmedAt: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload; // Store user info from the login payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = initialState.user; // Reset user info
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        // Optionally merge details into user object
        state.user = { ...state.user, ...action.payload };
      })
      .addCase(updateUserSession.fulfilled, (state, action) => {
        state.isAuthenticated = !!action.payload;
        state.user = action.payload; // Update user info
      });
  },
});

export default authSlice.reducer;
