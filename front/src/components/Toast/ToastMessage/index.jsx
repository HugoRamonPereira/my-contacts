import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import * as Styled from './styles';
import xCircle from '../../../assets/images/icon/x-circle.svg';
import greenCircle from '../../../assets/images/icon/check-circle.svg';

export default function ToastMessage({
  message, onRemoveMessage, isLeaving, onAnimationEnd,
}) {
  const animatedElementRef = useRef(null);
  useEffect(() => {
    const handleAnimationEnd = () => {
      onAnimationEnd(message.id);
    };

    const elementRef = animatedElementRef.current;
    if (isLeaving) {
      elementRef.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      elementRef.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [isLeaving, message.id, onAnimationEnd]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onRemoveMessage(message.id);
    }, message.duration || 7000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Styled.Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedElementRef}
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
    duration: PropTypes.number,
    type: PropTypes.oneOf(['default', 'success', 'error']),
  }).isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  onAnimationEnd: PropTypes.func.isRequired,
  isLeaving: PropTypes.bool.isRequired,
};
