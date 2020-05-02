import React from 'react';
import { range } from '../utils';
import { PlayArea } from './PlayArea';

const testColors = range(0, 15).map((number) =>
  number % 3 == 0 ? 'green' : 'unused'
);

export default function App() {
  return (
    <div className="playArea">
      <PlayArea colorList={testColors} />
    </div>
  );
}
