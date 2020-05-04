import React, { useState } from 'react';
import { PlayArea } from './PlayArea';
import { generateAnswers } from '../utils';

const testAnswers = generateAnswers(16);

export default function App() {
  const [gameId, setGameId] = useState(1);
  return (
    <div className="playArea">
      <PlayArea
        numberOfSpaces={16}
        key={gameId}
        resetGame={() => setGameId(gameId + 1)}
        answers={testAnswers}
      />
    </div>
  );
}
