import React, { useState } from 'react';
import { PlayArea } from './PlayArea';
import { generateAnswers } from '../utils';

export const numSpaces = 16;

export default function App({ initialData }) {
  const [gameId, setGameId] = useState(1);
  console.log('game id', gameId);
  const ans = gameId == 1 ? initialData : generateAnswers(numSpaces);
  console.log('answers', ans);
  return (
    <div className="playArea">
      <PlayArea
        numberOfSpaces={numSpaces}
        answers={ans}
        key={gameId}
        resetGame={() => setGameId(gameId + 1)}
        answers={ans}
      />
    </div>
  );
}
