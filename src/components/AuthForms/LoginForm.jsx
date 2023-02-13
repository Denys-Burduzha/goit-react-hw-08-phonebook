

import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './RegLogin.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const errorLogin = useSelector(state => state.error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log('formLogin = ', form);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      {errorLogin && <div>Error login</div>}
      <form className={css.reg_login_form} autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit" className={css.reg_button}>Log In</button>
      </form>
    </>
  );
};

export default LoginForm