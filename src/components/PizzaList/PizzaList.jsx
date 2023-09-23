import { useSelector } from 'react-redux';

import { selectAllPizza, selectCategory } from 'redux/selectors';

import plus from '../../images/plus2.svg';
import { TypePizza } from 'components/TypePizza/TypePizza';
import { SizePizza } from 'components/SizePizza/SizePizza';

import {
  List,
  Item,
  Name,
  ChoiceBox,
  WidthList,
  SizeList,
  PriceBox,
  Price,
  Button,
  Svg,
} from './PizzaList.styled';

const PizzaList = ({ filter }) => {
  const allPizza = useSelector(selectAllPizza);
  const allCategory = useSelector(selectCategory);
  const category = allCategory.find((elem, i) => i === filter);
  return (
    <div>
      <h1>{category} пиццы</h1>
      <List>
        {allPizza.map(({ name, avatar, id, type, size, price }) => (
          <Item key={id}>
            <img src={avatar} alt={name} width="260" />
            <Name>{name}</Name>
            <ChoiceBox>
              <WidthList>
                <TypePizza type={type} />
              </WidthList>
              <SizeList>
                <SizePizza size={size} />
              </SizeList>
            </ChoiceBox>
            <PriceBox>
              <Price>{price}</Price>
              <Button type="button">
                <Svg src={plus} style={{ fill: '#fff', color: 'white' }} />
                Добавить
              </Button>
            </PriceBox>
          </Item>
        ))}
      </List>
    </div>
  );
};

export default PizzaList;
