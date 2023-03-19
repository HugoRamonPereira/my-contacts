import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import ContactService from '../../services/ContactService';
import Button from '../../components/Button';
import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trashcan from '../../assets/images/icon/trashcan.svg';
import Loader from '../../components/Loader';
import ErrorX from '../../assets/images/icon/red-x-line-icon.svg';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchUser, setSearchUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchUser.toLocaleLowerCase())
  )), [contacts, searchUser]);

  async function loadContacts() {
    try {
      setIsLoading(true);
      const contactsList = await ContactService.listContacts(orderBy);
      setHasError(false);
      setContacts(contactsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadContacts();
  }, [orderBy]);

  const handleToggleOrderBy = () => {
    setOrderBy(
      (prevState) => (prevState === 'asc' ? 'desc' : 'asc'),
    );
  };

  const handleSearchUser = (e) => {
    setSearchUser(e.target.value);
  };

  const handleTryAgain = () => {
    loadContacts();
  };

  return (
    <Styled.Container>
      {/* <Modal danger /> */}
      <Loader isLoading={isLoading} />
      <Styled.SearchInputContainer>
        <input
          value={searchUser}
          type="text"
          placeholder="Search contact..."
          onChange={handleSearchUser}
        />
      </Styled.SearchInputContainer>
      <Styled.Header hasError={hasError}>
        {!hasError && (
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
                <div className="contact-name">
                  <strong>{contact.name}</strong>
                  {contact.category_name && (
                  <small>{contact.category_name}</small>
                  )}
                </div>
                <span>{contact.email}</span>
                <span>{contact.phone}</span>
              </div>
              <div className="actions">
                <Link to={`/edit/${contact.id}`}>
                  <img src={edit} alt="Edit" />
                </Link>
                <button type="button">
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
