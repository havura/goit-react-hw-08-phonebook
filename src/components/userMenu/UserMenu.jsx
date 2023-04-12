import { useDispatch , useSelector} from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

 const UserMenu = () => {
  const dispatch = useDispatch();
  const  userName  = useSelector(state => state.auth.user.name);

  return (
    <div className={css.wrapper}>
      <p  className={css.text}> Welcome, {userName }</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;