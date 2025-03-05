import css from './Contact.module.css';

export default function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
