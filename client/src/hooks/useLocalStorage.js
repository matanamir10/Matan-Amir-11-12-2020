import { useEffect, useState } from 'react';

export const useLocalStorage = ({ key, initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const setNewValue = (newVal) => setValue(newVal);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);

  return [value, setNewValue];
};
