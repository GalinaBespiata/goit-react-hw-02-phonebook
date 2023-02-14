import PropTypes from 'prop-types';
import css from '../ContactRender/ContactRender.module.css';

export function Contact({ contact, onDeleteContact = () => {} }) {
  return (
    <>
      <li key={contact.id} className={css.inputEl}>
        {contact.name} : {contact.number}
      </li>
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </>
  );
}
