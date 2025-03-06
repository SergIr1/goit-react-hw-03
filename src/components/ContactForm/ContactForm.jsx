import { useId } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

console.log(nanoid);

export default function ContactForm({ onAdd }) {
  const filedId = useId();
  // const nameId = useId();
  // const numberId = useId();
  const handeleSubmit = event => {
    event.preventDefault();
    onAdd({
      id: nanoid(),
      name: event.target.elements.name.value,
      number: event.target.elements.number.value,
    });
    event.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handeleSubmit}>
      <label className={css.textLabel} htmlFor={`${filedId}-name`}>
        Name
      </label>
      <input
        className={css.input}
        placeholder="Your name"
        type="text"
        name="name"
        id={`${filedId}-name`}
      />
      <label className={css.textLabel} htmlFor={`${filedId}-number`}>
        Number
      </label>
      <input
        className={css.input}
        placeholder="Your number"
        type="tel"
        name="number"
        id={`${filedId}-number`}
      />
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
