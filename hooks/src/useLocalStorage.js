import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [storedValue, setStoredValue] = useState('')

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item !== null) setStoredValue(JSON.parse(item))
  }, [key])

  const updateLocalStorage = (value) => {
    setStoredValue(value)
    window.localStorage.setItem(key, JSON.stringify(value))
  };

  const clearLocalStorage = () => {
    setStoredValue('')
    window.localStorage.clear(key)
  };

  return [storedValue, updateLocalStorage, clearLocalStorage]
}

export default useLocalStorage;
