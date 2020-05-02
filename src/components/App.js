import React, { useState, useEffect } from 'react';
import Space from './Space';
import { range } from '../utils';

const testColors = range(0, 15).map((number) =>
  number % 3 == 0 ? 'green' : 'red'
);

export default function App() {
  const [revealedButtons, setRevealedButtons] = useState([]);
  const [displayMode, setDisplayMode] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setDisplayMode(false);
    }, 2000);
    return () => {
      clearTimeout(timeId);
    };
  });

  const onButtonClick = (buttonNum) => {
    console.log(buttonNum);
    const newRevealedButtons = revealedButtons.includes(buttonNum)
      ? revealedButtons.filter((bn) => {
          bn !== buttonNum;
        })
      : revealedButtons.concat(buttonNum);
    setRevealedButtons(newRevealedButtons);
  };

  const buttonStatus = (buttonNum) => {
    return revealedButtons.includes(buttonNum) || displayMode
      ? testColors[buttonNum]
      : 'hidden';
  };

  return (
    <div className="playArea">
      {range(0, 15).map((number) => (
        <Space
          key={number}
          number={number}
          color={buttonStatus(number)}
          onClick={onButtonClick}
        />
      ))}
    </div>
  );
}
