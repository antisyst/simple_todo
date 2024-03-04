export const selectAllRecords = (state) => state.recordReducer.records;

export const selectFilteredRecords = (state) => {
  const { records, filter } = state.recordReducer;

  switch (filter) {
    case 'completed':
      return records.filter((record) => record.completed);
    case 'current':
      return records.filter((record) => !record.completed);
    default:
      return records;
  }
};

export const selectCompletedCount = (state) => {
  const { records } = state.recordReducer;
  return records.filter((record) => record.completed).length;
};

export const selectUncompletedCount = (state) => {
  const { records } = state.recordReducer;
  return records.filter((record) => !record.completed).length;
};
