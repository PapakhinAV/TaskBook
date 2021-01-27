
import * as TYPES from "../Types/types";

export const addNewTaskREducer = (data, counter) => async (dispatch, getState) => {
  const { username, email, taskContent } = data
  const formData = new FormData()
  formData.append("email", email)
  formData.append("text", taskContent)
  formData.append("username", username)
  const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/create?developer=PapakhinAV', {
    method: 'POST',
    body: formData
  })
  if (response.status === 200) {
    const result = await response.json()
    alert("The task was registered successfully")
    dispatch(addNewTask(`Last Task id - ${result.message.id}`))
  }
}

export const saveTask = (task) => ({
  type: TYPES.ADD_NEW_TASK,
  payload: task,
})

const addNewTask = (data) => ({
  type: TYPES.ADD_NEW_TASK_CONTROLLER,
  payload: data,
})

const saveAdminStatus = (token) => ({
  type: TYPES.CHANGE_ADMIN_STATUS,
  payload: token,
})


export const changeAdminStatus = (token) => async (dispatch, getState) => {
  dispatch(saveAdminStatus(token))
}

export const logoutAdmin = (token) => async (dispatch, getState) => {
  dispatch(saveAdminStatus(token))
  localStorage.removeItem('redux')
}

export const changeTaskStatus = (value, token, TaskID, setChangeStatus) => async (dispatch, getState) => {
  try {
    const formData = new FormData()
    formData.append("status", value)
    formData.append("token", token)
    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${TaskID}?developer=PapakhinAV`, {
      method: 'POST',
      body: formData
    })
    const result = await response.json()
    if (result.status === "ok") {
      return setChangeStatus(`Task ${TaskID} changed at ${new Date()}!`)
    }
  } catch (error) {
    alert(error)
  }
}

export const changeTaskText = (value, token, TaskID, setChangeStatus) => async (dispatch, getState) => {
  try {
    const formData = new FormData()
    formData.append("text", `!@#Edited: ${value}`)
    formData.append("token", token)
    const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/edit/${TaskID}?developer=PapakhinAV`, {
      method: 'POST',
      body: formData
    })
    const result = await response.json()
    if (result.status === "ok") {
      return setChangeStatus(`Task ${TaskID} changed at ${new Date()}!`)
    }
  } catch (error) {
  }
}
