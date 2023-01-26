import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import * as Styled from './styles';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <h1>Error 404</h1>
      <h2>Page not found!</h2>
      <Button onClick={() => navigate('/')}>
        Back to home
      </Button>
    </Styled.Container>
  );
}
