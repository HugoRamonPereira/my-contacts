import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Styled from './styles';

export default function Header({ hasError, amountOfContacts, amountOfFilteredContacts }) {
  // eslint-disable-next-line no-nested-ternary
  const alignment = hasError
    ? 'flex-end'
    : (
      amountOfContacts > 0
        ? 'space-between'
        : 'center'
    );

  return (
    <Styled.Container
      justifyContent={alignment}
    >
      {!hasError && amountOfContacts > 0 && (
      <strong>
        {amountOfFilteredContacts}
            &nbsp;
        {amountOfFilteredContacts === 1 ? 'contact' : 'contacts'}
      </strong>
      )}
      <Link to="/new">New contact</Link>
    </Styled.Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  amountOfContacts: PropTypes.number.isRequired,
  amountOfFilteredContacts: PropTypes.number.isRequired,
};
