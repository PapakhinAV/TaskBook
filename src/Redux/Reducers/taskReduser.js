import * as TYPES from '../Types/types';

const taskReduser = (state = [], action) => {
  switch (action.type) {
    case TYPES.ADD_NEW_TASK:
      return [...action.payload];

    default:
      return state;
  }
};

export default taskReduser;
