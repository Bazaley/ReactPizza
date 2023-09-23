import styled from 'styled-components';

export const MenuList = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 132.632px;
  height: 46px;
  border-radius: 30px;
  background: #f9f9f9;
  cursor: pointer;
  transition: background-color linear 250ms, color linear 250ms;

  &.active {
    background: #282828;
    color: #fff;
  }
  &:not(:last-child) {
    margin-right: 9px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-top: 76px;
  margin-bottom: 35px;
`;

// export const ListItemTextStyled = styled(ListItemText)`
//   font-family: 'Proxima-Nova', sans-serif;
//   display: flex;
//   margin-left: 10px;
//   color: #2c2c2c;

//   font-size: 14px;

//   font-weight: 700;

//   letter-spacing: 0.21px;
//   &.MuiTypography-colorTextSecondary {
//     color: red;
//   }
// `;

// [
//   {
//    "type": [
//     "тонкое",
//     "традиционное"
//    ],
//    "name": "чизбургер",
//    "avatar": "/react-pizza/static/media/cheese.764c19449aa5ef7e19f6.jpg",
//    "size": [
//     "26см",
//     "30см",
//     "40см"
//    ],
//    "price": "от 395 грн",
//    "id": "10"
//   },
//   {
//    "type": [
//     "тонкое",
//     "традиционное"
//    ],
//    "name": "креветки",
//    "avatar": "/react-pizza/static/media/cheeseburger.de31c18585cc71ca0d05.jpg",
//    "size": [
//     "26см",
//     "30см",
//     "40см"
//    ],
//    "price": "от 295 грн",
//    "id": "11"
//   },
//   {
//    "type": [
//     "тонкое",
//     "традиционное"
//    ],
//    "name": "сырная",
//    "avatar": "/react-pizza/static/media/salami.4ece39d294b6c720372c.jpg",
//    "size": [
//     "26см",
//     "30см",
//     "40см"
//    ],
//    "price": "от 345 грн",
//    "id": "12"
//   },
//   {
//    "type": [
//     "тонкое",
//     "традиционное"
//    ],
//    "name": "салями",
//    "avatar": "/react-pizza/static/media/cheese.764c19449aa5ef7e19f6.jpg",
//    "size": [
//     "26см",
//     "30см",
//     "40см"
//    ],
//    "price": "от 195 грн",
//    "id": "13"
//   },
//   {
//    "type": [
//     "тонкое",
//     "традиционное"
//    ],
//    "name": "сырный бортик",
//    "avatar": "/react-pizza/static/media/cheeseburger.de31c18585cc71ca0d05.jpg",
//    "size": [
//     "26см",
//     "30см",
//     "40см"
//    ],
//    "price": "от 235 грн",
//    "id": "14"
//   },
//   {
//    "type": [
//     "тонкое",
//     "традиционное"
//    ],
//    "name": "4 сыра",
//    "avatar": "/react-pizza/static/media/cheese.764c19449aa5ef7e19f6.jpg",
//    "size": [
//     "26см",
//     "30см",
//     "40см"
//    ],
//    "price": "от 395 грн",
//    "id": "15"
//   }
//  ]
