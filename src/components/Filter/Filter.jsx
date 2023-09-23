import { MenuList, Item, Box, ListItemTextStyled } from './Filter.styled';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { selectCategory } from 'redux/selectors';

const options = ['популярности', 'по цене', 'по алфавиту'];

const Filter = ({ filter, setFilter }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const category = useSelector(selectCategory);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      </div>
    </Box>
  );
};

export default Filter;
