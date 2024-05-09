import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { Button, Input } from "react-native-elements";
import { login } from "../../src/slices/authSlice";
import { supabase } from "../../lib/supabase";

export default function Auth() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("abc123@abc123.com");
  const [password, setPassword] = useState("HandOfHades");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    try {
      console.log({ email, password });
      await dispatch(login({ email, password })); // Ensuring the promise is handled correctly
      console.log("Completed dispatching login");
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false); // Ensures that loading is always turned off after operation
    }
  };

  async function signUpWithEmail() {
    setLoading(true); // Start loading state
    try {
      // Gather email and password
      const userData = { email, password };
      // Dispatch the signup action with the user data
      await dispatch(signup(userData));
      Alert.alert("Signup Successful", "You are now logged in!");
    } catch (error) {
      Alert.alert("Signup or Login Failed", error.message);
    } finally {
      setLoading(false); // Ensure loading state is reset
    }
  }

  return (
    <View style={styles.container}>
      <Input
        label="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={setEmail}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={"none"}
        containerStyle={styles.verticallySpaced}
      />
      <Input
        label="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={"none"}
        containerStyle={styles.verticallySpaced}
      />
      <Button
        title="Sign in"
        disabled={loading}
        onPress={handleSignIn}
        containerStyle={styles.verticallySpaced}
      />
      <Button
        title="Sign up"
        disabled={loading}
        onPress={signUpWithEmail}
        containerStyle={styles.verticallySpaced}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  verticallySpaced: {
    marginTop: 20,
  },
});
