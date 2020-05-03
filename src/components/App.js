import React from 'react';
import { range } from '../utils';
import { PlayArea } from './PlayArea';

export default function App() {
  return (
    <div className="playArea">
      <PlayArea numberOfSpaces={16} />
    </div>
  );
}
