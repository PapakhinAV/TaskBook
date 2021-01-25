import { useSelector } from "react-redux"
import styles from "./index.module.css"

const TaskHeader = ({ setSort_direction, setSort_field }) => {
  const store = useSelector(store => store.Admin_status)

  function sortUsernameUp() {
    setSort_direction("asc")
    setSort_field("username")
  }

  function sortUsernameDown() {
    setSort_direction("desc")
    setSort_field("username")
  }

  function sortEmailUp() {
    setSort_direction("asc")
    setSort_field("email")
  }

  function sortEmailDown() {
    setSort_direction("desc")
    setSort_field("email")
  }

  function sortStatusUp() {
    setSort_direction("asc")
    setSort_field("status")
  }

  function sortStatusDown() {
    setSort_direction("desc")
    setSort_field("status")
  }

  return (
    <div className={styles.MainBlock}>
      <div className={styles.ElementBlockUsername}>
        <div>Username</div>
        <div className={styles.SortButtons}>
          <div onClick={() => { sortUsernameUp() }} >🔼</div>
          <div onClick={() => { sortUsernameDown() }} >🔽</div>
        </div>
      </div>
      <div className={styles.ElementBlockEmail}>
        <div>E-mail</div>
        <div className={styles.SortButtons}>
          <div onClick={() => { sortEmailUp() }} >🔼</div>
          <div onClick={() => { sortEmailDown() }} >🔽</div>
        </div>
      </div>
      <div className={styles.ElementBlockTask}>
        <div>Task</div>

      </div>
      <div className={styles.ElementBlockStatus}>
        <div>Status</div>
        <div className={styles.SortButtons}>
          <div onClick={() => { sortStatusUp() }} >🔼</div>
          <div onClick={() => { sortStatusDown() }} >🔽</div>
        </div>
      </div>

      {
        store &&
        <div className={styles.ElementBlockStatusChange}>
          <div>Change Status</div>
        </div>
      }

    </div>
  );
}
export default TaskHeader;
