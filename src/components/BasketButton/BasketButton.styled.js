import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 19px;
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 30px;
  background: #fe5f1e;
  color: #fff;
  font-family: 'Proxima-Nova';
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &::before {
    position: absolute;
    content: '';
    width: 1px;
    height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 255, 255, 0.25);
  }
`;
export const Count = styled.p`
  display: flex;
  align-items: center;
`;
