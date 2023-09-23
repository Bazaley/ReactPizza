import styled from 'styled-components';

export const WidthItem = styled.li`
  .active {
    background-color: green;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131.877px;
  height: 32px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);

  cursor: pointer;

  &.active {
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  }
`;
