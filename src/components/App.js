import React, { useState } from 'react';
import Space from './Space';
import { range } from '../utils';

const colors = {
  unused: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const testColors = range(1, 16).map((number) =>
  number % 2 == 0 ? colors.used : colors.unused
);

export default function App({ initialData }) {
  const [count, setCount] = useState(0);
  return (
    <div className="playArea">
      {range(1, 16).map((number) => (
        <Space key={number} color={testColors[number - 1]} />
      ))}
    </div>
  );
}
