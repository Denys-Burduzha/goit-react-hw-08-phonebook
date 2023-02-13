

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegLogin.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    console.log('formRegister = ', form);

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.reg_login_form} autoComplete="off" onSubmit={handleSubmit}>
      <label>
        Username
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          minLength={3}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          required
          placeholder="mail@gmail.com"
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          minLength={7}
          required
          placeholder="*******"
        />
      </label>
      <button type="submit" className={css.reg_button}>Register</button>
    </form>
  );
};

export default RegisterForm