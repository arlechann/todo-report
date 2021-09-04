import { useState } from "react";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    checked: value,
    onChange: e => setValue(e.target.type === 'checkbox' ? e.target.checked : e.target.value),
  };
};

export default useInput;