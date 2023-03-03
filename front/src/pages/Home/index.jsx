import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trashcan from '../../assets/images/icon/trashcan.svg';
import Loader from '../../components/Loader';
import ContactService from '../../services/ContactService';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchUser, setSearchUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => contacts.filter((contact) => (
    contact.name.toLowerCase().includes(searchUser.toLocaleLowerCase())
  )), [contacts, searchUser]);

  useEffect(() => {
    async function loadContacts() {
      try {
        setIsLoading(true);

        const contactsList = await ContactService.listContacts(orderBy);

        setContacts(contactsList);
        setIsLoading(false);
      } catch (error) {
        console.log('Error', error);
      } finally {
        setIsLoading(false);
      }
    }

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
      <Styled.Header>
        <strong>
          {filteredContacts.length}
          &nbsp;
          {filteredContacts.length === 1 ? 'contact' : 'contacts'}
        </strong>
        <Link to="/new">New contact</Link>
      </Styled.Header>

      {filteredContacts.length > 0 ? (
        <Styled.ListHeader orderBy={orderBy}>
          <button type="button" onClick={handleToggleOrderBy}>
            <span>Name</span>
            <img src={arrow} alt="arrow" />
          </button>
        </Styled.ListHeader>
      ) : (
        <Styled.NoSearchResults>
          No results matching your search!
        </Styled.NoSearchResults>
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
    </Styled.Container>
  );
}
