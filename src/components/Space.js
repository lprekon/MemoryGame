import React, { useState } from 'react';

const Space = (props) => {
  return (
    <button className="space" style={{ backgroundColor: props.color }}></button>
  );
};

export default Space;
