import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import ContactService from '../../services/ContactService';
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
import toast from '../../utils/toast';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchUser, setSearchUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalShown, setIsDeletedModalShown] = useState(false);
  const [contactTargetedToBeDeleted, setContactTargetedToBeDeleted] = useState(null);
  const [isDeletionLoading, setIsDeletionLoading] = useState(false);

  const filteredContacts = useMemo(
    () => contacts.filter(
      (contact) => contact.name.toLowerCase().includes(searchUser.toLocaleLowerCase()),
    ),
    [contacts, searchUser],
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);
      const contactsList = await ContactService.listContacts(orderBy);
      // const contactsList = []; await ContactService.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const handleToggleOrderBy = () => {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
  };

  const handleTryAgain = () => {
    loadContacts();
  };

  const handleDeleteContact = (contact) => {
    setContactTargetedToBeDeleted(contact);
    setIsDeletedModalShown(true);
  };

  const handleHideDeleteModal = () => {
    setIsDeletedModalShown(false);
    setContactTargetedToBeDeleted(null);
  };

  const handleConfirmContactDeletion = async () => {
    try {
      setIsDeletionLoading(true);

      await ContactService.deleteContact(contactTargetedToBeDeleted.id);

      setContacts((prevState) => prevState.filter(
        (contact) => contact.id !== contactTargetedToBeDeleted.id,
      ));

      handleHideDeleteModal();

      toast({
        type: 'success',
        text: 'Contact deleted successfully!',
      });
    } catch {
      toast({
        type: 'error',
        text: 'Failed to delete contact!',
      });
    } finally {
      setIsDeletionLoading(false);
    }
  };

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
