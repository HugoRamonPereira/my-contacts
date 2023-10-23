import PropTypes from 'prop-types';
import { Button } from '../../../../components/Button';
import * as Styled from './styles';
import ErrorX from '../../../../assets/images/icon/red-x-line-icon.svg';

export default function ErrorStatus({ onTryAgain }) {
  return (
    <Styled.Container>
      <div className="details">
        <img src={ErrorX} alt="Error" />
        <strong>An error ocurred trying to get your contacts!</strong>
        <Button type="button" onClick={onTryAgain}>
          Try again
        </Button>
      </div>
    </Styled.Container>
  );
}

ErrorStatus.propTypes = {
  onTryAgain: PropTypes.func.isRequired,
};
