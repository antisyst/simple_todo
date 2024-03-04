export const ADD_RECORD = "ADD_RECORD";
export const TOGGLE_STATUS = "TOGGLE_STATUS";
export const SET_FILTER = "SET_FILTER";
export const DELETE_RECORD = "DELETE_RECORD";
export const EDIT_RECORD = "EDIT_RECORD";

export const addRecord = (records) => ({
  type: ADD_RECORD,
  payload: records,
});

export const toggleStatus = (id) => ({
  type: TOGGLE_STATUS,
  payload: id,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const deleteRecord = (id) => ({
  type: DELETE_RECORD,
  payload: id,
});

export const editRecord = (record) => ({
  type: EDIT_RECORD,
  payload: record,
});
