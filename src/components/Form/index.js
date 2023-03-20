import {
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { add } from "~/redux/task";

const Form = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleAddTask = () => {
    if (task.length === 0) {
      alert("Vui lòng nhập nhiệm vụ!");
      return false;
    }
    setTask("");
    dispatch(add(task));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={10}
      style={styles.addTask}>
      <TextInput
        style={styles.input}
        placeholder="Nhập nhiệm vụ..."
        value={task}
        onChangeText={text => {
          setTask(text);
        }}
      />
      <TouchableOpacity
        style={styles.iconWrapper}
        activeOpacity={0.4}
        onPress={handleAddTask}>
        <Text style={styles.icon}>+</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;
