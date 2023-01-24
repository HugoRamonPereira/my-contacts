import { Container, SearchInputContainer } from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="MyContacts" width="201px" />

      <SearchInputContainer>
        <input type="text" placeholder="Search contact..." />
      </SearchInputContainer>
    </Container>
  );
}
