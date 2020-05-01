import React, { useState } from 'react';
import Space from './Space';

export default function App({ initialData }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Space />
    </div>
  );
}
