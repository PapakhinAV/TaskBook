import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css"
import { changeTaskStatus, changeTaskText, logoutAdmin } from "../../../../Redux/ActionsCreator/actions"
import { useHistory } from "react-router-dom";

const Task = (props) => {
  const store = useSelector(store => store.Admin_status)
  const history = useHistory()
  const dispatch = useDispatch()

  let textValue = null;
  if (props.data.text.slice(0, 11) === "!@#Edited: ") {
    textValue = props.data.text.slice(11)
  } else { textValue = props.data.text }

  const [inputs, setInputs] = useState({
    text: textValue,
  })

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  async function changeStatus(value) {

    try {
      const storageRedux = localStorage.getItem("redux")
      const token = await JSON.parse(storageRedux).Admin_status
      dispatch(changeTaskStatus(value, token, props.data.id, props.setChangeStatus))
    } catch (error) {
      alert("Необходима авторизация!")
      dispatch(logoutAdmin(false))
      history.push("/login")
    }


  }

  async function changeText(value) {
    if (textValue !== text) {
      try {
        const storageRedux = localStorage.getItem("redux")
        const token = await JSON.parse(storageRedux).Admin_status
        dispatch(changeTaskText(value, token, props.data.id, props.setChangeStatus))
      } catch (error) {
        alert("Необходима авторизация!")
        dispatch(logoutAdmin(false))
        history.push("/login")
      }
    }
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
            <p>{textValue}</p>
          </div>
      }

      <div className={styles.ElementBlockStatus}>
        {status === 10 ?
          <div>Done</div> :
          <div>Not Done</div>}
        {store && props.data.text.slice(0, 11) === "!@#Edited: " ?
          <div>Edited</div> :
          <div></div>
        }
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
