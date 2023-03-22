import { Component } from 'react';

class ContactsFilter extends Component {
  render() {
    return (
      <>
        <label>Find contacts by name </label>
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={this.props.handleFilter}
        />
      </>
    );
  }
}

export default ContactsFilter;
