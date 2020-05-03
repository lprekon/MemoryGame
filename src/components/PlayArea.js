import React, { useState, useEffect } from 'react';
import { range, arraysAreEqual } from '../utils';
import Space from './Space';

const testAnswers = [1, 3, 5, 7];

export const PlayArea = (props) => {
  const [revealedButtons, setRevealedButtons] = useState([]);
  const [displayMode, setDisplayMode] = useState(true);
  const [answers, setAnswers] = useState(testAnswers);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDisplayMode(false);
    }, 1500);
    return () => {
      clearTimeout(timeId);
    };
  });

  const onButtonClick = (clickedButton) => {
    if (displayMode) {
      return;
    }
    const newRevealedButtons = revealedButtons.includes(clickedButton)
      ? revealedButtons.filter((element) => element !== clickedButton)
      : revealedButtons.concat(clickedButton);
    setRevealedButtons(newRevealedButtons);
  };

  const buttonStatus = (buttonNum) => {
    return displayMode && answers.includes(buttonNum)
      ? 'green'
      : revealedButtons.includes(buttonNum)
      ? answers.includes(buttonNum)
        ? 'green'
        : 'red'
      : 'hidden';
  };

  const gameIsWon = arraysAreEqual(answers.sort(), revealedButtons.sort());

  return (
    <div>
      <div className="playArea">
        {range(0, props.numberOfSpaces - 1).map((number) => (
          <Space
            key={number}
            number={number}
            color={buttonStatus(number)}
            onClick={onButtonClick}
          />
        ))}
      </div>
      <div className="messageArea">
        <h1>{gameIsWon ? 'You win!' : ''}</h1>
      </div>
    </div>
  );
};
