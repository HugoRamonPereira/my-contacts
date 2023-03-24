import PropTypes from 'prop-types';
import * as Styled from './styles';
import ReactPortal from '../ReactPortal';
import Spinner from '../Spinner';

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Styled.Overlay>
        <Spinner />
      </Styled.Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
