import { GET_TASKS, COUNT_TASKS, COUNT_IS_COMPLETE } from './tasks.types';

const INITIAL_STATE = {
  array: [],
  tasksTotal: 0,
  isCompleteTotal: 0,
  loading: true,
};

const tasksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        array: action.payload,
        loading: false,
      };

    case COUNT_TASKS:
      return {
        ...state,
        tasksTotal: action.payload,
      };

    case COUNT_IS_COMPLETE:
      return {
        ...state,
        isCompleteTotal: action.payload,
      };

    default:
      return state;
  }
};

export default tasksReducer;
