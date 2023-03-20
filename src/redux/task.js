import { createSlice } from "@reduxjs/toolkit";
import { getObjData, storeObjData } from "~/utils/storage";
export const taskSlice = createSlice({
  name: "task",
  initialState: getObjData("taskState", {
    tasks: [],
  }),
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newState = {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload,
          },
        ],
      };
      storeObjData("taskState", newState);
      return newState;
    },
    del: (state, action) => {
      const newState = {
        ...state,
        tasks: [
          ...state.tasks.slice(0, action.payload),
          ...state.tasks.slice(action.payload + 1),
        ],
      };
      storeObjData("taskState", newState);
      return newState;
    },
    // decrement: state => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { add, del } = taskSlice.actions;

export const selectTasks = state => state.task.tasks;

const taskReducer = taskSlice.reducer;

export default taskReducer;
