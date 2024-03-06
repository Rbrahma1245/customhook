import { useState } from "react";

function useFormInput(initialValue) {
  let [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
}

export default useFormInput;
