'use client';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { increment, decrement } from '../store/counter/counterSlice';

export default function Counter() {
  const value = useAppSelector((s) => s.counter.value);
  const dispatch = useAppDispatch();

  return (
    <section style={{ marginTop: 16 }}>
      <div style={{ marginBottom: 8 }}>Count: {value}</div>
      <button onClick={() => dispatch(increment())} style={{ marginRight: 8 }}>
        +1
      </button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </section>
  );
}
