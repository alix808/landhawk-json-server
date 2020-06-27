import { GET_TASKS, COUNT_TASKS, COUNT_IS_COMPLETE } from './tasks.types';

export const getTasks = () => async (dispatch) => {
  try {
    const res = await fetch('/tasks');
    const data = await res.json();

    dispatch({
      type: GET_TASKS,
      payload: data,
    });
  } catch (err) {}
};

export const countTasks = (array) => {
  let length = array.length;

  return {
    type: COUNT_TASKS,
    payload: length,
  };
};

export const countIsComplete = (array) => {
  let number = 0;

  const helperFunction = (isComplete) => {
    if (isComplete === true) {
      number++;
    }
  };

  array.forEach((t) => helperFunction(t.isComplete));

  return {
    type: COUNT_IS_COMPLETE,
    payload: number,
  };
};
