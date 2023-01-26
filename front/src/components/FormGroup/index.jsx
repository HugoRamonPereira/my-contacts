import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function FormGroup({ children }) {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
