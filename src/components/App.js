import React, { useState } from 'react';
import Space from './Space';
import { range } from '../utils';

export default function App({ initialData }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      {range(1, 16).map((number) => (
        <Space key={number} />
      ))}
    </div>
  );
}
