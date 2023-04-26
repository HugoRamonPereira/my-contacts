import { Link } from 'react-router-dom';
import * as Styled from './styles';
import { Button } from '../../components/Button';
import userAvatar from '../../assets/images/contact-avatar.svg';
import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trashcan from '../../assets/images/icon/trashcan.svg';
import Loader from '../../components/Loader';
import ErrorX from '../../assets/images/icon/red-x-line-icon.svg';
import EmptyBox from '../../assets/images/icon/empty-box.svg';
import magnifier from '../../assets/images/icon/magnifier-question.svg';
import Modal from '../../components/Modal';
import useHome from './useHome';

export default function Home() {
  const {
    isLoading,
    contactTargetedToBeDeleted,
    isDeleteModalShown,
    isDeletionLoading,
    handleHideDeleteModal,
    handleConfirmContactDeletion,
    contacts,
    searchUser,
    handleSearchUser,
    hasError,
    filteredContacts,
    handleTryAgain,
    orderBy,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  return (
    <Styled.Container>
      <Modal
        danger
        title={`Do you really wish to delete the contact "${contactTargetedToBeDeleted?.name}"?`}
        confirmLabel="Delete"
        visible={isDeleteModalShown}
        isLoading={isDeletionLoading}
        onCancel={handleHideDeleteModal}
        onConfirm={handleConfirmContactDeletion}
      >
        <pre>This action cannot be undone!</pre>
      </Modal>
      <Loader isLoading={isLoading} />
      {contacts.length > 0 && (
        <Styled.SearchInputContainer>
          <input
            value={searchUser}
            type="text"
            placeholder="Search contact..."
            onChange={handleSearchUser}
          />
        </Styled.SearchInputContainer>
      )}
      <Styled.Header
        justifyContent={
          // eslint-disable-next-line no-nested-ternary
          hasError
            ? 'flex-end'
            : contacts.length > 0
              ? 'space-between'
              : 'center'
        }
      >
        {!hasError && contacts.length > 0 && (
          <strong>
            {filteredContacts.length}
            &nbsp;
            {filteredContacts.length === 1 ? 'contact' : 'contacts'}
          </strong>
        )}
        <Link to="/new">New contact</Link>
      </Styled.Header>

      {hasError && (
        <Styled.ErrorContainer>
          <div className="details">
            <img src={ErrorX} alt="Error" />
            <strong>An error ocurred trying to get your contacts!</strong>
            <Button type="button" onClick={handleTryAgain}>
              Try again
            </Button>
          </div>
        </Styled.ErrorContainer>
      )}

      {!hasError && (
        <>
          {contacts.length < 1 && !isLoading && (
            <Styled.EmptyListContainer>
              <img src={EmptyBox} alt="Empty box" />
              <p>
                You don&apos;t have any registered contacts yet!
                <br />
                Click the button above
                <strong> &ldquo;New Contact&rdquo; </strong>
                <br />
                to register your first one!
              </p>
            </Styled.EmptyListContainer>
          )}

          {contacts.length > 0 && filteredContacts < 1 && (
            <Styled.NotFoundContainer>
              <img src={magnifier} alt="Magnifier" />

              <span>
                No contacts were found for
                {' '}
                <strong>
                  &ldquo;
                  {searchUser}
                  &rdquo;.
                </strong>
              </span>
            </Styled.NotFoundContainer>
          )}

          {filteredContacts.length > 0 && (
            <Styled.ListHeader orderBy={orderBy}>
              <button type="button" onClick={handleToggleOrderBy}>
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
                  onClick={() => handleDeleteContact(contact)}
                >
                  <img src={trashcan} alt="Delete" />
                </button>
              </div>
            </Styled.ContactCard>
          ))}
        </>
      )}
    </Styled.Container>
  );
}
