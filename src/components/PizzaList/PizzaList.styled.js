import styled from 'styled-components';
import { HandySvg } from 'handy-svg';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 110px) / 3);

  &:not(:nth-child(3n)) {
    margin-right: 55px;
  }

  &:not(:nth-last-child(-n + 3)) {
    margin-bottom: 65px;
  }
`;

export const Name = styled.p`
  margin-bottom: 22px;
  color: #000;
  text-align: center;

  font-size: 20px;

  font-weight: 800;

  letter-spacing: 0.2px;
`;

export const ChoiceBox = styled.div`
  margin-bottom: 17px;
  padding: 7px;
  width: 280px;
  height: 85px;
  border-radius: 10px;
  background: #f3f3f3;
  box-sizing: border-box;
`;

export const WidthList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
`;

export const SizeList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const PriceBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  margin-right: 36px;
  color: #000;

  font-size: 22px;

  font-weight: 700;

  letter-spacing: 0.33px;
`;

export const Button = styled.button`
  width: 155px;
  height: 40px;
  border: none;
  border-radius: 30px;
  border: 1px solid #eb5a1e;
  background: #fff;

  color: #eb5a1e;

  font-size: 16px;

  font-weight: 700;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #fe5f1e;
    color: #fff;
  }
`;

export const Svg = styled(HandySvg)`
  margin-right: 8px;

  width: 12px;
  height: 12px;
`;
