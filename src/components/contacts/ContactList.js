import { Component } from 'react';
import css from './ContactList.module.css';

class ContactList extends Component {
  render() {
    let { contacts, arrayFilter, handleDelete } = this.props;
    contacts = contacts.filter(item => {
      return item.name.toLowerCase().includes(arrayFilter);
    });
    return (
      <>
        <ul className={css.list}>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={handleDelete} value={contact.id}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default ContactList;
