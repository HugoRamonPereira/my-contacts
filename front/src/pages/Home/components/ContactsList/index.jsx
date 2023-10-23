import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { memo } from 'react';
import * as Styled from './styles';
import userAvatar from '../../../../assets/images/contact-avatar.svg';
import arrow from '../../../../assets/images/icon/arrow.svg';
import edit from '../../../../assets/images/icon/edit.svg';
import trashcan from '../../../../assets/images/icon/trashcan.svg';

function ContactsList({
  filteredContacts,
  orderBy,
  onToggleOrderBy,
  onDeleteContact,
}) {
  return (
    <>
      {filteredContacts.length > 0 && (
      <Styled.ListHeader orderBy={orderBy}>
        <button type="button" onClick={onToggleOrderBy}>
          <span>Name</span>
          <img src={arrow} alt="arrow" />
        </button>
      </Styled.ListHeader>
      )}

      {filteredContacts.map((contact) => (
        <Styled.ContactCard key={contact.id}>
          <div className="info">
            <Styled.AvatarContainer>
              <img src={userAvatar} alt="user-avatar" />
            </Styled.AvatarContainer>
            <div className="contact-name">
              <div className="contact-name-info">
                <strong>{contact.name}</strong>
                {contact.category.name && (
                <small>{contact.category.name}</small>
                )}
              </div>

              <div className="contact-details">
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
            </div>
          </div>

          <div className="actions">
            <Link to={`/edit/${contact.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button
              type="button"
              onClick={() => onDeleteContact(contact)}
            >
              <img src={trashcan} alt="Delete" />
            </button>
          </div>
        </Styled.ContactCard>
      ))}
    </>
  );
}

ContactsList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
    category: PropTypes.shape({
      name: PropTypes.string,
    }),
  })).isRequired,
  orderBy: PropTypes.string.isRequired,
  onToggleOrderBy: PropTypes.func.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default memo(ContactsList);
