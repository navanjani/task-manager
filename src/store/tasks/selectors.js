export const selectAllTasks = (reduxState) => {
  return reduxState.tasks.allTasks;
};

export const selectShowCompletedTasks = (reduxState) => {
  return reduxState.tasks.showCompletedTasks;
};

export const selectMaxTasks = (reduxState) => {
  return reduxState.tasks.maxTasks;
};
