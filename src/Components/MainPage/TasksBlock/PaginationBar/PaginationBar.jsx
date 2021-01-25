import Pagination from "../Pagination/Pagination"
import styles from "./index.module.css"

const PaginationBar = (props) => {
  const pageCounter = []
  for (let i = 1; i <= props.value; i += 1) {
    pageCounter.push(i)
  }

  return (
    <div className={styles.MainBlock}>
      {pageCounter.map((el) => <Pagination key={el} value={el} setPage={props.setPage} />)}
    </div>
  );
}
export default PaginationBar;
