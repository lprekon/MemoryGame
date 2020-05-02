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

  const onButtonClick = (buttonNum) => {
    console.log(buttonNum);
    if (displayMode) {
      return;
    }
    const newRevealedButtons = revealedButtons.includes(buttonNum)
      ? revealedButtons.filter((bn) => {
          bn !== buttonNum;
        })
      : revealedButtons.concat(buttonNum);
    setRevealedButtons(newRevealedButtons);
  };

  const buttonStatus = (buttonNum) => {
    return revealedButtons.includes(buttonNum) || displayMode
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
