import styles from "./index.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveTask } from "../../../Redux/ActionsCreator/actions"
import TaskHeader from "./TaskHeader/TaskHeader";
import Task from "./Task/Task";
import PaginationBar from "./PaginationBar/PaginationBar";


const TasksBlock = () => {
  const addNewTask = useSelector(state => state.addNewTask)

  const [page, setPage] = useState(1)
  const [sort_field, setSort_field] = useState("username")
  const [sort_direction, setSort_direction] = useState("asc")
  const [allPages, setAllPages] = useState("")
  const [changeStatus, setChangeStatus] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://uxcandy.com/~shapoval/test-task-backend/v2/?page=${page}&developer=PapakhinAV&sort_direction=${sort_direction}&sort_field=${sort_field}`, {
      })
      const result = await response.json()
      console.log(result);
      if (result.status === "ok") {
        setAllPages(Math.ceil(result.message.total_task_count / 3))
        dispatch(saveTask(result.message.tasks))
      }
    })()
  }, [page, sort_field, sort_direction, addNewTask, changeStatus])

  const store = useSelector(state => state.Tasks)

  return (
    <div className={styles.Main}>
      <div className={styles.TaskBlock}>
        <TaskHeader setSort_field={setSort_field} setSort_direction={setSort_direction} />
        {store.map((el) => {
          return <Task key={el.id} setChangeStatus={setChangeStatus} data={el} />
        })}
        <PaginationBar value={allPages} setPage={setPage} />
      </div>
    </div>
  );
}

export default TasksBlock;
