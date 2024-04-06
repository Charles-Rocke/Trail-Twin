import React from "react";
import { AppRegistry } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import App from "./App";
import { name as appName } from "./app.json";
import store from './src/store'; 

store.dispatch({type: 'counter/increase', payload: 100 }) 
console.log(store.getState())

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
