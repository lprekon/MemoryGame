import React, { useState } from 'react';
import { PlayArea } from './PlayArea';
import { generateAnswers } from '../utils';

export default function App() {
  const [gameId, setGameId] = useState(1);
  const ans = generateAnswers(numSpaces);
  return (
    <div className="playArea">
      <PlayArea
        numberOfSpaces={numSpaces}
        answers={ans}
        key={gameId}
        resetGame={() => setGameId(gameId + 1)}
        answers={generateAnswers(16)}
      />
    </div>
  );
}
