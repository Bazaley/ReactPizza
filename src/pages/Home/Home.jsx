import Header from 'components/Header/Header';
import Filter from 'components/Filter/Filter';
import PizzaList from 'components/PizzaList/PizzaList';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategory, getAllPizza, getFilter } from 'redux/pizza/pizza';

const Home = () => {
  const [filter, setFilter] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getAllPizza());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilter(filter));
  }, [filter, dispatch]);

  return (
    <>
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      <PizzaList filter={filter} />
    </>
  );
};

export default Home;
