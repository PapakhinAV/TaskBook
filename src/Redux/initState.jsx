
const initialState = () => {
  const initialValue = {
    Tasks: [],
    Admin_status: false,
    addNewTask: "",
  }
  return JSON.parse(localStorage.getItem('redux')) || initialValue
}

export default initialState;
