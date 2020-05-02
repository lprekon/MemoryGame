import React from 'react';
import { colors } from '../utils';

const Space = (props) => {
  return (
    <button
      className="space"
      style={{ backgroundColor: colors[props.color] }}
      onClick={() => {
        props.onClick(props.number);
      }}
    ></button>
  );
};

export default Space;
