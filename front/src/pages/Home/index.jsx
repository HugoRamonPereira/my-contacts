import { Link } from 'react-router-dom';
import * as Styled from './styles';
import arrow from '../../assets/images/icon/arrow.svg';
import edit from '../../assets/images/icon/edit.svg';
import trashcan from '../../assets/images/icon/trashcan.svg';
import Loader from '../../components/Loader';
// import Modal from '../../components/Modal';

export default function Home() {
  return (
    <Styled.Container>
      {/* <Modal danger /> */}
      <Loader />
      <Styled.SearchInputContainer>
        <input type="text" placeholder="Search contact..." />
      </Styled.SearchInputContainer>
      <Styled.Header>
        <strong>3 contacts</strong>
        <Link to="/new">New contact</Link>
      </Styled.Header>
      <Styled.ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
        <Styled.ContactCard>
          <div className="info">
            <div className="contact-name">
              <strong>Ramon Pereira</strong>
              <small>Instagram</small>
            </div>
            <span>ramone.techie@gmail.com</span>
            <span>(88) 99772-5550</span>
          </div>
          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trashcan} alt="Delete" />
            </button>
          </div>
        </Styled.ContactCard>
      </Styled.ListContainer>
    </Styled.Container>
  );
}
