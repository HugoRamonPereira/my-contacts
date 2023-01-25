import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Styled from './styles';
import arrow from '../../assets/images/icon/arrow.svg';

export default function PageHeader({ title }) {
  return (
    <Styled.Container>
      <Link to="/">
        <img src={arrow} alt="Return Arrow" />
        <span>Back</span>
      </Link>
      <h1>{title}</h1>
    </Styled.Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
