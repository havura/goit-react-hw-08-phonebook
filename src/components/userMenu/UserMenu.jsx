import { useDispatch , useSelector} from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import css from './UserMenu.module.css';

 const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth.user.name);

  return (
    <div className={css.wrapper}>
      <p  className={css.text}> Welcome {user}</p>
      <button className={css.btn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;