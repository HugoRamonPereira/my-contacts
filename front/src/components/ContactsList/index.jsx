import {
  ContactCard, Container, Header, ListContainer,
} from './styles';
import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trashcan from '../../assets/images/icon/trashcan.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contacts</strong>
        <a href="/">New contact</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
        <ContactCard>
          <div className="info">
            <div className="contact-name">
              <strong>Ramon Pereira</strong>
              <small>Instagram</small>
            </div>
            <span>ramone.techie@gmail.com</span>
            <span>(88) 99772-5550</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trashcan} alt="Delete" />
            </button>
          </div>
        </ContactCard>
        <ContactCard>
          <div className="info">
            <div className="contact-name">
              <strong>Ramon Pereira</strong>
              <small>Instagram</small>
            </div>
            <span>ramone.techie@gmail.com</span>
            <span>(88) 99772-5550</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trashcan} alt="Delete" />
            </button>
          </div>
        </ContactCard>
        <ContactCard>
          <div className="info">
            <div className="contact-name">
              <strong>Ramon Pereira</strong>
              <small>Instagram</small>
            </div>
            <span>ramone.techie@gmail.com</span>
            <span>(88) 99772-5550</span>
          </div>
          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trashcan} alt="Delete" />
            </button>
          </div>
        </ContactCard>
      </ListContainer>
    </Container>
  );
}
