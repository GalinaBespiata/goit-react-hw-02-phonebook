import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from '../ContactRender/ContactRender.module.css';
import { Contact } from '../ContactRender/ContactRender.jsx';

export function ContactList({ contacts, onDeleteContact = () => {} }) {
  return (
    <ul>
      {contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <Contact
              contact={contact}
              key={contact.id}
              onDeleteContact={onDeleteContact}
            />
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      phoneNumber: PropTypes.string,
    }).isRequired
  ).isRequired,
};
