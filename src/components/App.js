import React, { useState } from 'react';
import { PlayArea } from './PlayArea';

const testAnswers = [1, 3, 5, 7];

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
