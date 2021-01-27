import styles from "./index.module.css"
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { changeAdminStatus } from "../../Redux/ActionsCreator/actions"

const Login = () => {
  const history = useHistory()
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

  const { username, password } = inputs;

  async function authorization(event) {
    const formData = new FormData()
    formData.append("username", username)
    formData.append("password", password)
    event.preventDefault()
    const response = await fetch('https://uxcandy.com/~shapoval/test-task-backend/v2/login?developer=PapakhinAV', {
      method: 'POST',
      body: formData
    })
    const result = await response.json()
    if (result.status === "ok") {
      dispatch(changeAdminStatus(result.message.token))
      history.push("/")
    }
    else {
      alert("Введен неверный логин или пароль")
    }

  }

  return (
    <div className={styles.Main}>
      <div className={styles.TaskBlock}>
        <div></div>
        <form onSubmit={authorization}>
          <div className={styles.newTaskInput}>
            <label className={styles.newClassLable} htmlFor={"username"} >Username: </label>
            <input onChange={handleChange} required type="text" id="username" size="30" name="username" placeholder="enter Username" />
          </div>
          <div className={styles.newTaskInput}>
            <label className={styles.newClassLable} htmlFor={"password"} >Password </label>
            <input onChange={handleChange} required type="password" id="password" size="30" name="password" placeholder="enter Password" />
          </div>
          <div className={styles.ButtonSize}>
            <button className="btn btn-outline-primary mx-3 w-100">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
