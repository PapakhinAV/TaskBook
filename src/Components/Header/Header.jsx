import styles from "./index.module.css"
import { useDispatch, useSelector } from 'react-redux';
import HeaderButton from '../Button/button'
import { Link } from "react-router-dom";
import { logoutAdmin } from "../../Redux/ActionsCreator/actions"
const Header = () => {
  const dispatch = useDispatch()
  const store = useSelector(state => state.Admin_status)
  function logout() {
    dispatch(logoutAdmin(false))
  }
  return (
    <>
      <div className={styles.headerFlexParams}>
        {store ?
          <div onClick={logout} className={styles.buttonSize}>
            <HeaderButton title={"Sign Out"} />
          </div> :
          <div className={styles.buttonSize}>
            <Link to="/login">
              <HeaderButton title={"Sign In"} />
            </Link>
          </div>
        }
      </div>
      <hr />
    </>
  );
}

export default Header;
