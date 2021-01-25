import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css"
import { changeTaskStatus, changeTaskText } from "../../../../Redux/ActionsCreator/actions"

const Task = (props) => {
  const store = useSelector(store => store.Admin_status)

  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    text: props.data.text,
  })

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  function changeStatus(value) {
    dispatch(changeTaskStatus(value, store, props.data.id, props.setChangeStatus))
  }

  function changeText(value) {
    dispatch(changeTaskText(value, store, props.data.id, props.setChangeStatus))
  }

  const { text } = inputs

  const status = props.data.status

  return (
    <div className={styles.MainBlock}>
      <div className={styles.ElementBlockUsername}>
        <p>{props.data.username}</p>
      </div>
      <div className={styles.ElementBlockEmail}>
        <p>{props.data.email}</p>
      </div>

      {
        store ?
          <div className={styles.ElementBlockTask}>
            < input onChange={handleChange} size="20" name="text" value={text} type="text" />
            <button onClick={() => { changeText(text) }} className="btn btn-outline-primary mx-3 w-25">Save!</button>
          </div>
          :
          <div className={styles.ElementBlockTask}>
            <p>{props.data.text}</p>
          </div>
      }

      <div className={styles.ElementBlockStatus}>

        {status === 10 ?
          <p>Done</p> :
          <p>Not Done</p>}

      </div>

      {store && (
        status ?
          <div className={styles.ButtonSize}>
            <button onClick={() => { changeStatus(0) }} className="btn btn-outline-primary mx-3 w-100">Undo!</button>
          </div>
          :
          <div className={styles.ButtonSize}>
            <button onClick={() => { changeStatus(10) }} className="btn btn-outline-primary mx-3 w-100">Done!</button>
          </div>)
      }

    </div>
  );
}

export default Task;
