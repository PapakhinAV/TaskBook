import { combineReducers } from 'redux';
import Admin_statusReducer from './Admin_statusReducer';
import taskReduser from "./taskReduser"
import addNewTaskReducer from "./addNewTaskReducer"



const rootReducer = combineReducers({
  Tasks: taskReduser,
  Admin_status: Admin_statusReducer,
  addNewTask: addNewTaskReducer,

});

export default rootReducer;
