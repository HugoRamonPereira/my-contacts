import * as Styled from './styles';
import EmptyBox from '../../../../assets/images/icon/empty-box.svg';

export default function EmptyList() {
  return (
    <Styled.Container>
      <img src={EmptyBox} alt="Empty box" />
      <p>
        You don&apos;t have any registered contacts yet!
        <br />
        Click the button above
        <strong> &ldquo;New Contact&rdquo; </strong>
        <br />
        to register your first one!
      </p>
    </Styled.Container>
  );
}
