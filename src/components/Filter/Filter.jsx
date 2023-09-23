import { MenuList, Item, Box } from './Filter.styled';
import React from 'react';

import { useSelector } from 'react-redux';

import { selectCategory } from 'redux/selectors';

const Filter = ({ filter, setFilter }) => {
  const category = useSelector(selectCategory);

  return (
    <Box>
      <MenuList>
        {category.map((elem, i) => (
          <Item
            key={i}
            className={filter === i ? 'active' : ''}
            onClick={() => setFilter(i)}
          >
            {elem}
          </Item>
        ))}
      </MenuList>
      {/* 
      <div>
        <List component="nav" aria-label="Device settings">
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            onClick={handleClickListItem}
          >
            <ListItemTextStyled
              className="text"
              primary="сортировка по"
              secondary={options[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={event => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div> */}
    </Box>
  );
};

export default Filter;
