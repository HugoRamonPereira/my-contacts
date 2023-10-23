import * as Styled from './styles';
import Loader from '../../components/Loader';
import useHome from './useHome';
import InputSearch from './components/InputSearch';
import Header from './components/Header';
import ErrorStatus from './components/ErrorStatus';
import EmptyList from './components/EmptyList';
import SearchNotFound from './components/SearchNotFound';
import ContactsList from './components/ContactsList';
import Modal from '../../components/Modal';

export default function Home() {
  const {
    isLoading,
    isDeleteModalShown,
    isDeletionLoading,
    contacts,
    filteredContacts,
    contactTargetedToBeDeleted,
    searchUser,
    orderBy,
    hasError,
    handleHideDeleteModal,
    handleConfirmContactDeletion,
    handleSearchUser,
    handleTryAgain,
    handleToggleOrderBy,
    handleDeleteContact,
  } = useHome();

  const hasContacts = contacts.length > 0;
  const isListEmpty = !hasError && (!isLoading && !hasContacts);
  const isSearchEmpty = !hasError && (hasContacts && filteredContacts.length < 1);

  return (
    <Styled.Container>
      <Loader isLoading={isLoading} />
      {hasContacts && (
        <InputSearch
          value={searchUser}
          onChange={handleSearchUser}
        />
      )}

      <Header
        hasError={hasError}
        amountOfContacts={contacts.length}
        amountOfFilteredContacts={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchUser={searchUser} />}

      {hasContacts && (
        <>
          <ContactsList
            filteredContacts={filteredContacts}
            orderBy={orderBy}
            onToggleOrderBy={handleToggleOrderBy}
            onDeleteContact={handleDeleteContact}
          />

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
        </>
      )}
    </Styled.Container>
  );
}
