import { useCallback, useState } from 'react';

export const useErrors = () => {
  const [errors, setErrors] = useState([]);

  const setError = useCallback(({ field, message }) => {
    const emailErrorExists = errors.find((error) => error.field === field);

    if (emailErrorExists) {
      return;
    }

    setErrors((prevState) => [
      ...prevState,
      { field, message },
    ]);
  }, [errors]);

  const removeError = useCallback((fieldName) => {
    setErrors((prevState) => prevState.filter(
      (error) => error.field !== fieldName,
    ));
  }, []);

  const getErrorMessageByFieldName = useCallback((fieldName) => (
    errors.find((error) => error.field === fieldName)?.message
  ), [errors]);

  return {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  };
};
