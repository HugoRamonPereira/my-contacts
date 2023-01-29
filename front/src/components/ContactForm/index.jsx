import { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import * as Styled from './styles';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';
import isEmailValid from '../../utils/isValidEmail';
import { useErrors } from '../../hooks/useErrors';
import formatPhone from '../../utils/formatPhone';

export default function ContactForm({ buttonText }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();
  const allFormFieldsValid = (name && errors.length === 0);

  const handleNameChange = (e) => {
    setName(e.target.value);

    if (!e.target.value) {
      setError({ field: 'name', message: 'Name is required!' });
    } else {
      removeError('name');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);

    if (e.target.value && !isEmailValid(e.target.value)) {
      setError({ field: 'email', message: 'Email is not valid!' });
    } else {
      removeError('email');
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.Form onSubmit={handleSubmit} noValidate>
      <FormGroup error={getErrorMessageByFieldName('name')}>
        <Input
          placeholder="Name *"
          value={name}
          onChange={handleNameChange}
          error={getErrorMessageByFieldName('name')}
        />
      </FormGroup>
      <FormGroup error={getErrorMessageByFieldName('email')}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          error={getErrorMessageByFieldName('email')}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={handlePhoneChange}
          maxLength="15"
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
        <Button type="submit" disabled={!allFormFieldsValid}>
          {buttonText}
        </Button>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
}

ContactForm.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
