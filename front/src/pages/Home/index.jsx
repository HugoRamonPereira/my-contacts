import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Styled from './styles';
import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trashcan from '../../assets/images/icon/trashcan.svg';
// import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/contacts')
      .then(async (response) => {
        const json = await response.json();
        setContacts(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <Styled.Container>
      {/* <Modal danger /> */}
      {/* <Loader /> */}
      <Styled.SearchInputContainer>
        <input type="text" placeholder="Search contact..." />
      </Styled.SearchInputContainer>
      <Styled.Header>
        <strong>
          {contacts.length}
          &nbsp;
          {contacts.length === 1 ? 'contact' : 'contacts'}
        </strong>
        <Link to="/new">New contact</Link>
      </Styled.Header>
      <Styled.ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
        {contacts.map((contact) => (
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
      </Styled.ListContainer>
    </Styled.Container>
  );
}
