import { useState } from 'react';

import { WidthItem } from './TypePizza.styled';

export const TypePizza = ({ type }) => {
  const [activeWidth, setActiveWidth] = useState(0);

  return (
    <>
      {type.map((elem, i) => (
        <WidthItem
          key={i}
          className={activeWidth === i ? 'active' : ''}
          onClick={() => setActiveWidth(i)}
        >
          {elem}
        </WidthItem>
      ))}
    </>
  );
};
