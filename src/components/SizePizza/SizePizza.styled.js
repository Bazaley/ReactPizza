import styled from 'styled-components';

export const SizeItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 86.007px;
  height: 32px;
  border-radius: 5px;

  background: rgba(255, 255, 255, 0.3);

  cursor: pointer;

  &.active {
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.04);
  }
`;
