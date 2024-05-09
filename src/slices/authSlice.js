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
  async ({ email, password }, { dispatch }) => {
    try {
      const { user: signUpUser, error: signUpError } =
        await supabase.auth.signUp({
          email,
          password,
        });

      if (signUpError) {
        throw new Error(signUpError.message); // Log or display the original error message
      }

      if (signUpUser) {
        // If the user is created, attempt to log in right after signup
        const { user: loginUser, error: loginError } =
          await supabase.auth.signIn({
            email,
            password,
          });

        if (loginError) {
          throw new Error(loginError.message); // Log or display the original error message
        }

        if (loginUser) {
          // Dispatch updateUserSession action right here after successful login
          dispatch(
            updateUserSession({
              id: loginUser.id,
              email: loginUser.email,
              role: loginUser.role, // Assuming your user object contains 'role'
              confirmedAt: loginUser.confirmed_at, // Assuming your user object contains 'confirmed_at'
            })
          );

          // Navigate or show success message after successful login
          // Example using React Navigation
          // navigation.navigate('Home');
          // Or using a simple alert
          alert("Signup and login successful!");
        }
      }
    } catch (error) {
      throw new Error("Signup or login failed: " + error.message);
    }
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
      .addCase(signup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = {
          id: action.payload.id,
          email: action.payload.email,
          role: action.payload.role,
          confirmedAt: action.payload.confirmedAt,
        };
      })
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
