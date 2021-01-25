import styles from "./index.module.css"
import NewTask from "./New_task/New_task"
import TasksBlock from "./TasksBlock/TasksBlock"


const MainPage = () => {

  return (
    <div className={styles.MainBlock}>
      <NewTask />
      <TasksBlock />
    </div>
  );
}

export default MainPage;
