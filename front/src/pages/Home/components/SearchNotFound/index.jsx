/* eslint-disable react/jsx-one-expression-per-line */
import PropTypes from 'prop-types';
import * as Styled from './styles';
import magnifier from '../../../../assets/images/icon/magnifier-question.svg';

export default function SearchNotFound({ searchUser }) {
  return (
    <Styled.Container>
      <img src={magnifier} alt="Magnifier" />
      <span>
        No contacts were found for <strong>&ldquo;{searchUser}&rdquo;.</strong>
      </span>
    </Styled.Container>
  );
}

SearchNotFound.propTypes = {
  searchUser: PropTypes.string.isRequired,
};
