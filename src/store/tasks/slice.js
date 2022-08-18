import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 5,
  allTasks: [
    { id: 1, name: "Pick up new glasses", completed: true },
    { id: 2, name: "Buy airco", completed: false },
    { id: 3, name: "Take packages to return", completed: false },
    { id: 4, name: "Order dog food", completed: false },
  ],
  showCompletedTasks: false,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      const { task } = action.payload;
      const newTask = {
        id: state.allTasks.length + 1,
        name: task,
        completed: false,
      };
      state.allTasks = [...state.allTasks, newTask];
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.id !== id);
    },
    toggleTaskCompleted: (state, action) => {
      const id = action.payload;
      state.allTasks = state.allTasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
    toggleShowCompleted: (state, action) => {
      state.showCompletedTasks = !state.showCompletedTasks;
    },
    liftMaxTasks: (state, action) => {
      state.maxTasks = action.payload;
    },
  },
});

export const {
  addTasks,
  removeTask,
  toggleTaskCompleted,
  toggleShowCompleted,
  liftMaxTasks,
} = tasksSlice.actions;

export default tasksSlice.reducer;
