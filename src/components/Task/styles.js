import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  items: {
    marginTop: 25,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    columnGap: 16,
    square: {
      width: 48,
      height: 36,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      number: {
        fontWeight: "bold",
        fontSize: 16,
        color: "#fff",
      },
    },
    task: {
      flex: 1,
    },
  },
});

export default styles;
