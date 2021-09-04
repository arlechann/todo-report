import { useState } from 'react';

const useTextarea = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
  };
};

export default useTextarea;