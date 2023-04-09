import ToastMessage from '../ToastMessage';
import * as Styled from './styles';

export default function ToastContainer() {
  return (
    <Styled.Container>
      <ToastMessage text="Default toast" />
      <ToastMessage text="Error toast" type="error" />
      <ToastMessage text="Success toast" type="success" />
    </Styled.Container>
  );
}
