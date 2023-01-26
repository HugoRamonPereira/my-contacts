import * as Styled from './styles';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Styled.Container>
      <img src={logo} alt="MyContacts" width="201px" />
    </Styled.Container>
  );
}
