import PropTypes from 'prop-types';

import { Head, Table } from './ContactList.styled';

function ContactList({ contacts, filter, onDelete }) {
  const visibleContactList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (!visibleContactList.length) {
    return <p>No contacts</p>;
  }

  return (
    <Table>
      <Head>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>x</th>
        </tr>
      </Head>
      <tbody>
        {visibleContactList.map(({ id, name, number }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => onDelete(id)}>
                x
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ContactList;
