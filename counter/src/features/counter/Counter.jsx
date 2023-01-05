// Hooks from Redux
import { useSelector, useDispatch } from 'react-redux';
// Import Actions
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from '../../features/counter/counterSlice';

import { useState } from 'react';

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const incrementValue = Number(incrementAmount) || 0;

  const resetCounter = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };

  // Read from the Store
  const count = useSelector((state) => state.counter.count);
  // Define Dispatch (to dispatch our actions)
  const dispatch = useDispatch();
  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input
          type='text'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <div>
          <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
            Add Amount
          </button>
          <button onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
