import React, { useState } from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import filterImg from '../../assets/filter-solid.svg';
import { setFilter, toggleTodos } from '../../redux/actions';
import { VISIBILITY_FILTERS } from '../../constants';

const Filters = ({ activeFilter, ids, setFilter, toggleTodos }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleVisibility = () => setOpenFilter(!openFilter);

  const handleFilter = (event) => {
    let filter = event.target.value;
    setFilter(filter);
  };

  const handleToggle = () => {
    console.log(ids);
    toggleTodos(ids);
    resetCheckBoxes();
  };

  const resetCheckBoxes = () => {
    document
      .querySelectorAll('input[type=checkbox]')
      .forEach((el) => (el.checked = false));
  };

  return (
    <div className='Filters'>
      <button onClick={handleToggle}>Liberar seleccionadas</button>

      <div className='FilterOptions'>
        {openFilter ? (
          <select id='filters' value={activeFilter} onChange={handleFilter}>
            {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
              const currentFilter = VISIBILITY_FILTERS[filterKey];
              return (
                <option value={currentFilter} key={currentFilter}>
                  {currentFilter}
                </option>
              );
            })}
          </select>
        ) : null}
        <img
          onClick={handleVisibility}
          className='Image'
          src={filterImg}
          alt='filter'
        ></img>
        Ordenar
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.todos.ids);
  return { activeFilter: state.visibilityFilter, ids: state.todos.ids };
};

export default connect(mapStateToProps, { setFilter, toggleTodos })(Filters);
