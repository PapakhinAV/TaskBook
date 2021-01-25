import * as TYPES from '../Types/types';

const Admin_statusReducer = (state = false, action) => {
  switch (action.type) {
    case TYPES.CHANGE_ADMIN_STATUS:
      return (action.payload);

    default:
      return state;
  }
};

export default Admin_statusReducer;
