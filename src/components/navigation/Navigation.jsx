import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserMenu from 'components/userMenu/UserMenu';
import css from '../navigation/Navigation.module.css'

const Navigation = () => {
  const  isLoggedIn  = useSelector(selectIsLoggedIn);

  return (
    <header>
      <nav className={css.navList}>
        <NavLink className={css.homeLink} to="/">Home</NavLink>
        {!isLoggedIn && (
          <>
            <NavLink to="/register">Registration</NavLink>
            <NavLink  to="/login">Login</NavLink>
          </>
        )}
        {isLoggedIn && 
          <NavLink to="/contacts">
            Contacts
          </NavLink>
        }
      </nav>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};
export default Navigation;
