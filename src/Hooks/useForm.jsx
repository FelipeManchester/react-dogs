import { useState } from 'react';

const useForm = (schema) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  function validate(value) {
    if (!schema) return true;

    const result = schema.safeParse(value);
    setError(result.success ? null : result.error.issues[0].message);

    return result.success;
  }

  function onChange({ target }) {
    setValue(target.value);
    if (error) validate(target.value);
  }
  return {
    value,
    setValue,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
    error,
  };
};

export default useForm;
