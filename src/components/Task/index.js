import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";

import styles from "./styles";
import color from "~/contains/color";
import { useDispatch, useSelector } from "react-redux";
import { del, init, selectTasks } from "~/redux/task";
import { getObjData } from "~/utils/storage";

const Task = () => {
  const data = useSelector(selectTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    getObjData("taskState", {
      tasks: [],
    }).then(res => dispatch(init(res)));
  }, []);
  function handleNumber(number, maxLength) {
    let num = number.toString();
    let max = Math.max(maxLength.toString().length, 2);
    let result = "";
    if (num.length < max) {
      for (let i = num.length; i < max; i++) {
        result += "0";
      }
    }
    result += num;
    return result;
  }
  function deleteTask(task, index) {
    Alert.alert(
      "Hoàn thành nhiệm vụ",
      `Bạn có chắc đã hoàn thành nhiệm vụ "${task}"`,
      [
        {
          text: "Cancel",
          // onPress: () => Alert.alert("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Chắc chắn", onPress: () => dispatch(del(index)) },
      ]
    );
  }

  return (
    <FlatList
      style={styles.items}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.4}
            key={index}
            onPress={() => {
              deleteTask(item?.task, index);
            }}>
            <View
              style={[
                styles.item.square,
                {
                  backgroundColor: index % 2 == 1 ? color.third : color.second,
                },
              ]}>
              <Text style={styles.item.square.number}>
                {handleNumber(index + 1, data.length)}
              </Text>
            </View>
            <Text style={styles.item.task}>{item.task}</Text>
          </TouchableOpacity>
        );
      }}
      ListEmptyComponent={
        <View>
          <Text>Chưa có task nào được thêm vào</Text>
        </View>
      }
    />
  );
};

export default Task;
