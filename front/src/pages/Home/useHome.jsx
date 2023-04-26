import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import ContactService from '../../services/ContactService';
import toast from '../../utils/toast';

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchUser, setSearchUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalShown, setIsDeletedModalShown] = useState(false);
  const [contactTargetedToBeDeleted, setContactTargetedToBeDeleted] = useState(null);
  const [isDeletionLoading, setIsDeletionLoading] = useState(false);

  const filteredContacts = useMemo(
    () => contacts.filter((contact) => contact.name
      .toLowerCase()
      .includes(searchUser.toLocaleLowerCase())),
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

  return {
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
  };
}
