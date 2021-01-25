import * as TYPES from '../Types/types';

const addNewTaskReducer = (state = "", action) => {
  switch (action.type) {
    case TYPES.ADD_NEW_TASK_CONTROLLER:
      return (action.payload);

    default:
      return state;
  }
};

export default addNewTaskReducer;
