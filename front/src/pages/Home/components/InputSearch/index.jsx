import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function InputSearch({ value, onChange }) {
  return (
    <Styled.Container>
      <input
        value={value}
        type="text"
        placeholder="Search contact..."
        onChange={onChange}
      />
    </Styled.Container>
  );
}

InputSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
