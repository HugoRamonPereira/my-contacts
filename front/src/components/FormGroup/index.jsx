import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function FormGroup({ children, error }) {
  return (
    <Styled.Container>
      {children}
      {error && <small>{error}</small>}
    </Styled.Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};

FormGroup.propTypes = {
  error: PropTypes.string,
};

FormGroup.defaultProps = {
  error: null,
};
