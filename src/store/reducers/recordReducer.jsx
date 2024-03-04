import { ADD_RECORD, TOGGLE_STATUS, SET_FILTER, DELETE_RECORD, EDIT_RECORD } from '../actions/recordActions';

const initialState = {
  records: [],
  filter: 'all',
};

const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECORD: {
      let newRecords;
      if (Array.isArray(action.payload)) {
        newRecords = [...state.records, ...action.payload];
      } else {
        newRecords = [...state.records, action.payload];
      }
      return {
        ...state,
        records: newRecords,
      };
    }
    case TOGGLE_STATUS:
      return {
        ...state,
        records: state.records.map((record) =>
          record.id === action.payload
            ? { ...record, completed: !record.completed }
            : record
        ),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case DELETE_RECORD:
      return {
        ...state,
        records: state.records.filter((record) => record.id !== action.payload),
      };
    case EDIT_RECORD:
      return {
        ...state,
        records: state.records.map((record) =>
          record.id === action.payload.id ? { ...record, name: action.payload.name } : record
        ),
      };
    default:
      return state;
  }
};

export default recordReducer;