import PropTypes from 'prop-types';
import * as Styled from './styles';

import xCircle from '../../../assets/images/icon/x-circle.svg';
import greenCircle from '../../../assets/images/icon/check-circle.svg';

export default function ToastMessage({
  message, onRemoveMessage,
}) {
  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Styled.Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'error' && <img src={xCircle} alt="X" />}
      {message.type === 'success' && <img src={greenCircle} alt="Check" />}
      <strong>{message.text}</strong>
    </Styled.Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'error']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
};
