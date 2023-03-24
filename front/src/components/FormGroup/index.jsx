import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import * as Styled from './styles';

export default function FormGroup({ children, error, isLoading }) {
  console.log(isLoading);
  return (
    <Styled.Container>
      <div className="form-item">
        {children}
        {isLoading && <Spinner />}
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

FormGroup.defaultProps = {
  error: null,
};
