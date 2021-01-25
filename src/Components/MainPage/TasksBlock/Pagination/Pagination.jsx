import styles from "./index.module.css"

const Pagination = ({ value, setPage }) => {
  return (
    <div className={styles.ElementBlock}>
      <p onClick={() => { setPage(value) }} role="button" className="active page-link ">{value}</p>
    </div >
  );
}
export default Pagination;
