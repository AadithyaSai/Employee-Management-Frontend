import { useState } from "react";

const useLocalStorage = (
  key: string,
  initialValue?: string
): [string, (newValue: string) => void] => {
  const [keyvaluePair, setKeyvaluePair] = useState({
    key: localStorage.getItem(key) ?? initialValue ?? "",
  });

  if (initialValue) localStorage.setItem(key, keyvaluePair.key);

  const setLocalStorageValue = (newValue: string) => {
    localStorage.setItem(key, newValue);
    setKeyvaluePair({ key: newValue });
  };

  return [keyvaluePair.key, setLocalStorageValue];
};

export default useLocalStorage;
