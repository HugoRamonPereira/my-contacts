import { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import * as Styled from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from '../../utils/isValidEmail';

export default function ContactForm({ buttonText }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (!e.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'name', message: 'Name is required!' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'name',
      ));
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      const emailErrorExists = errors.find((error) => error.field === 'email');

      if (emailErrorExists) {
        return;
      }

      setErrors((prevState) => [
        ...prevState,
        { field: 'email', message: 'Email is not valid!' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter(
        (error) => error.field !== 'email',
      ));
    }
  };

  const getErrorMessageByFieldName = (fieldName) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Twitter">Twitter</option>
        </Select>
      </FormGroup>
      <Styled.ButtonContainer>
        <Button type="submit">
          {buttonText}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
