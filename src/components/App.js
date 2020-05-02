import React, { useState } from 'react';
import Space from './Space';
import { range } from '../utils';

const testColors = range(0, 15).map((number) =>
  number % 3 == 0 ? 'green' : 'red'
);

export default function App() {
  const [revealedButtons, setRevealedButtons] = useState([1]);

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
    return revealedButtons.includes(buttonNum)
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
