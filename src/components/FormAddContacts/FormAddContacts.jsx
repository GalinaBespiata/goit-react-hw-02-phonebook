// import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../FormAddContacts/FormAddContacts.module.css';

export class FormAddContacts extends Component {
  state = { name: '', number: '' };

  handleInputChange = evt => {
    const inputValue = evt.target.value;
    const inputName = evt.target.name;

    this.setState({
      [inputName]: inputValue,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    //
    const contact = {
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onSubmit(contact); //спитати чи можна до пропсів звертатися не прописуючи їх в параметрах

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.formEl} onSubmit={this.handleSubmit}>
        <label>
          <span>Name</span>
          <input
            className={css.inputEl}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <span>Number</span>
          <input
            className={css.inputEl}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
          />
        </label>
        <button className={css.inputEl} type="submit" onClick={this.addContact}>
          Add contact
        </button>
      </form>
    );
  }
}