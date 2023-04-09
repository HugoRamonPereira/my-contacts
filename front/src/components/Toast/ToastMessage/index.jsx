import PropTypes from 'prop-types';
import * as Styled from './styles';

import xCircle from '../../../assets/images/icon/x-circle.svg';
import greenCircle from '../../../assets/images/icon/check-circle.svg';

export default function ToastMessage({ text, type }) {
  return (
    <Styled.Container type={type}>
      {type === 'error' && <img src={xCircle} alt="X" />}
      {type === 'success' && <img src={greenCircle} alt="Check" />}
      <strong>{text}</strong>
    </Styled.Container>
  );
}

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'error']),
};

ToastMessage.defaultProps = {
  type: 'default',
};
