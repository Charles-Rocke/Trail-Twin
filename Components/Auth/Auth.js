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
      await dispatch(login({ email, password }));
    } catch (error) {
      Alert.alert("Login Failed", error.message);
    }
    setLoading(false);
  };

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
    } else {
      // Automatically log in the user after signup
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (loginError) {
        Alert.alert("Login after signup failed", loginError.message);
      } else {
        // Dispatch the login action here
        dispatch(login({ email, password }));
      }
    }
    setLoading(false);
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
