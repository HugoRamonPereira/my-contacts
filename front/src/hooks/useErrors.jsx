import { useState } from 'react';

export const useErrors = () => {
  const [errors, setErrors] = useState([]);

  const setError = ({ field, message }) => {
    const emailErrorExists = errors.find((error) => error.field === field);

    if (emailErrorExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  };

  const removeError = (fieldName) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  };

  const getErrorMessageByFieldName = (fieldName) => {
    return errors.find((error) => error.field === fieldName)?.message;
  };

  return { setError, removeError, getErrorMessageByFieldName };
};
