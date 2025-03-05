import { useId } from 'react';
import css from './ContactForm.module.css';

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();
  const handeleSubmit = event => {
    event.preventDefault();
    onAdd({
      id: Date.now(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    });
    event.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handeleSubmit}>
      <label className={css.textLabel} htmlFor={nameId}>
        Name
      </label>
      <input
        className={css.input}
        placeholder="Your name"
        type="text"
        name="name"
        id={nameId}
      />
      <label className={css.textLabel} htmlFor={numberId}>
        Number
      </label>
      <input
        className={css.input}
        placeholder="Your number"
        type="tel"
        name="number"
        id={numberId}
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
