import PropTypes from 'prop-types';
import * as Styled from './styles';
import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isLoading);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Styled.Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Styled.Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
