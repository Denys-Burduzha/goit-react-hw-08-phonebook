

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import  UserMenu  from 'components/UserMenu/UserMenu';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <div className={css.nav_container}>
        <NavLink to="/" className={css.nav_linkHome}>Home</NavLink>
        {isLoggedIn ? (
          <NavLink to="/contacts" className={css.nav_linkContacts}>Contacts</NavLink>
        ) : (
          <div>
            {!isLoggedIn && <NavLink to="/register" className={css.nav_linkRegister}>Register</NavLink>}
            {!isLoggedIn && <NavLink to="/login" className={css.nav_linkLogin}>Log In</NavLink>}
          </div>
        )}
      </div>

      {isLoggedIn && <UserMenu />}
    </>
  );
};

export default Navigation