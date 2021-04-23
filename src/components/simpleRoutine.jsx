import React, { useState, useRef, useCallback, useEffect } from 'react';

const SimpleRoutine = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log(`mounted & updated!: ${count}`);
  }, [count]);
  return (
    <li className="routine">
      <span ref={spanRef} className="routine-name">
        Reading
      </span>
      <span className="routine-count">{count}</span>
      <button
        className="routine-button routine-increase"
        onClick={handleIncrement}
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleRoutine;
