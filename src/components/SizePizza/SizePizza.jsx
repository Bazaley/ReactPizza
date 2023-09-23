import { useState } from 'react';

import { SizeItem } from './SizePizza.styled';

export const SizePizza = ({ size }) => {
  const [activeSize, setActiveSize] = useState(0);
  return (
    <>
      {size.map((elem, i) => (
        <SizeItem
          key={i}
          className={activeSize === i ? 'active' : ''}
          onClick={() => setActiveSize(i)}
        >
          {elem}
        </SizeItem>
      ))}
    </>
  );
};
