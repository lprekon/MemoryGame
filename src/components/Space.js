import React, { useState } from 'react';

const Space = (props) => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = () => {
    setIsShowing(!isShowing);
  };

  const shownColor = isShowing ? props.trueColor : props.color;
  return (
    <button
      className="space"
      style={{ backgroundColor: shownColor }}
      onClick={handleClick}
    ></button>
  );
};

export default Space;
