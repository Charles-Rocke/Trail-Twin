import React from "react";
import App from "./App";
import store from "./src/Store";

import { AppRegistry } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";

export default function Root() {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </ReduxProvider>
  );
}

AppRegistry.registerComponent(appName, () => Root);
