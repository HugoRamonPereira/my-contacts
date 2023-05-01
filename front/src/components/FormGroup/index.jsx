import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import * as Styled from './styles';

export default function FormGroup({ children, error = null, isLoading = false }) {
  return (
    <Styled.Container>
      <div className="form-item">
        {children}
        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>
      {error && <small>{error}</small>}
    </Styled.Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};
