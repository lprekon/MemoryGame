import React, { useState, useEffect } from 'react';
import { range, arraysAreEqual } from '../utils';
import Space from './Space';

export const PlayArea = (props) => {
  const [revealedButtons, setRevealedButtons] = useState([]);
  const [displayMode, setDisplayMode] = useState(true);
  //   const [props.answers, setprops.answers] = useState(props.props.answers);

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
    return displayMode && props.answers.includes(buttonNum)
      ? 'green'
      : revealedButtons.includes(buttonNum)
      ? props.answers.includes(buttonNum)
        ? 'green'
        : 'red'
      : 'hidden';
  };

  const gameIsWon = arraysAreEqual(
    props.answers.sort(),
    revealedButtons.sort()
  );

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
      {gameIsWon ? (
        <div className="messageArea">
          <h1>You win!</h1>
          <button onClick={props.resetGame}>Play again</button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
