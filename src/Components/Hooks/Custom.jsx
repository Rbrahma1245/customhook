import { useState, useEffect } from "react";

const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    console.log("Custom hook is mounted");

    return () => {
      console.log("Custom hook is unmounted");
    };
  }, []);

  // Return the values or functions you want to expose
  return {
    value,
    updateValue,
  };
};

export default useCustomHook;
