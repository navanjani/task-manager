import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./tasks/slice";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
});
export default store;
