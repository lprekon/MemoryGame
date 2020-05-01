import React, { useState } from 'react';
import Space from './Space';
import { range } from '../utils';

const colors = {
  unused: 'lightgray',
  green: 'lightgreen',
  red: 'lightcoral',
  candidate: 'deepskyblue',
};

const testColors = range(1, 16).map((number) =>
  number % 2 == 0 ? colors.green : colors.red
);

export default function App({ initialData }) {
  const [count, setCount] = useState(0);
  return (
    <div className="playArea">
      {range(1, 16).map((number) => (
        <Space
          key={number}
          color={colors.unused}
          trueColor={testColors[number - 1]}
        />
      ))}
    </div>
  );
}
