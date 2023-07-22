import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterUser } from 'redux/filter/filterSlise';

export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const changeFilter = ({ target }) => {
    setFilter(target.value);
    dispatch(filterUser(target.value));
  };
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" name="filter" value={filter} onChange={changeFilter} />
    </label>
  );
};
