import { useEffect, useState } from "react";

function useCounter(initializer, componentName) {
  let [count, setCount] = useState(initializer);

  function inc() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log(`Button of ${componentName} is clicked. The value is ${count}`);
  }, [count, componentName]);

  return { inc, count };
}

export default useCounter;
