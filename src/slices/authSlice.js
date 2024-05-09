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

export const signup = createAsyncThunk(
  "auth/signup",
  async function handleUserAuthentication({ email, password }, { dispatch }) {
    try {
      const { user, session, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      // If the signup is successful, attempt to log in the user
      if (user && !session) {
        // Since Supabase sometimes does not create a session immediately after signup,
        // we perform a login to establish the session
        return dispatch(login({ email, password })).then((response) => {
          if (response.error) {
            throw new Error(response.error.message);
          }
          return response.payload; // Return the payload from the login action
        });
      } else if (session) {
        // If there is a session, we update the user session in Redux directly
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          confirmedAt: user.confirmed_at,
        };
      }
    } catch (error) {
      throw new Error("Signup or login failed: " + error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async function handleUserAuthentication({ email, password }, { dispatch }) {
    console.log("In handleUserAuth thunk:", { email, password });
    try {
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      console.log("Got user, session, error:", user, session, error);
      if (error) console.log("Error:", error);

      if (session && user) {
        console.log("Session: ", session);
        console.log("User: ", user);
        // Extract necessary data from the session object
        return {
          id: user.id,
          email: user.email,
          role: user.role,
          confirmedAt: user.confirmed_at,
        };
      }
    } catch (error) {
      console.log(error);
      throw new Error("Login failed: " + error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  console.log("logging out");
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
      .addCase(signup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload; // Assuming payload contains the user data
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
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
