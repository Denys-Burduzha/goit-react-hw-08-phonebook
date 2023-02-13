
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/selectors';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === name)) {
      toast.error(`${name} is already in contacts.`)
    } else {
      dispatch(addContact({id: toast(), name, number }));
    }
    
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeName = e => {
    if (e.target.type === 'text') {
      setName(e.target.value);
    }
  };
  const handleChangeNumber = e => {
    if (e.target.type === 'tel') {
      setNumber(e.target.value);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          placeholder="enter a name"
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          placeholder="enter a number"
        />
      </label>
      <button className={css.btn} type="submit" onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}


export default ContactForm