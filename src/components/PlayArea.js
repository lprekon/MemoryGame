import React, { useState, useEffect } from 'react';
import { range } from '../utils';
import Space from './Space';

export const PlayArea = (props) => {
  const [revealedButtons, setRevealedButtons] = useState([]);
  const [displayMode, setDisplayMode] = useState(true);

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
    return revealedButtons.includes(buttonNum) ||
      (displayMode && props.colorList[buttonNum] == 'green')
      ? props.colorList[buttonNum]
      : 'hidden';
  };

  return (
    <div className="playArea">
      {range(0, props.colorList.length - 1).map((number) => (
        <Space
          key={number}
          number={number}
          color={buttonStatus(number)}
          onClick={onButtonClick}
        />
      ))}
    </div>
  );
};
