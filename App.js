import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import styles from "./App.styles";
import Form from "~/components/Form";
import Task from "~/components/Task";
import { Provider } from "react-redux";
import store from "~/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        <StatusBar style="auto" />
        <View style={styles.body}>
          <Text style={styles.body.header}>Todo List</Text>
          <Task />
        </View>
        <Form />
      </View>
    </Provider>
  );
}
