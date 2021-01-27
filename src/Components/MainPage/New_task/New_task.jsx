import styles from "./index.module.css"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addNewTaskREducer } from "../../../Redux/ActionsCreator/actions"

const NewTask = () => {

  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    taskContent: "",
  })

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function saveTask(event) {
    event.preventDefault()
    dispatch(addNewTaskREducer(inputs))
  }

  const { username, email, taskContent } = inputs;

  return (
    <div className={styles.Main}>
      <div className={styles.TaskBlock}>
        <div>Add a new task</div>
        <form onSubmit={saveTask}>
          <div className={styles.newTaskInput}>
            <label className={styles.newClassLable} htmlFor={"email"} >E-mail: </label>
            <input onChange={handleChange} required type="email" id="email" size="30" name="email" placeholder="enter E-mail" />
          </div>
          <div className={styles.newTaskInput}>
            <label className={styles.newClassLable} htmlFor={"username"} >Username: </label>
            <input onChange={handleChange} required type="text" id="username" size="30" name="username" placeholder="enter Username" />
          </div>
          <div className={styles.newTaskInput}>
            <label className={styles.newClassLable} htmlFor={"taskContent"} >Task: </label>
            <textarea onChange={handleChange} id="taskContent" name="taskContent" placeholder="enter your Task" cols="33" rows="4"></textarea>
          </div>
          <div className={styles.ButtonSize}>
            <button className="btn btn-outline-primary mx-3 w-100">ADD</button>
          </div>
        </form>
      </div>
    </div>

  );
}

export default NewTask;
