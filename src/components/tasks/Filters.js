import React, { useState } from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import filterImg from '../../assets/filter-solid.svg';
import { setFilter, toggleTodo } from '../../redux/actions';
import { VISIBILITY_FILTERS } from '../../constants';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Filters = ({ activeFilter, ids, setFilter, toggleTodo }) => {
  const filters = {
    CREATION_DATE_DESC: 'Fecha de creación ⬇',
    CREATION_DATE_ASC: 'Fecha de creación ⬆',
    FINISH_DATE_ASC: 'Fecha de finalización ⬆',
    FINISH_DATE_DESC: 'Fecha de finalización ⬇',
    STATUS_ATR_LIB: 'Atrasadas a Liberadas ⬇',
    STATUS_LIB_ATR: 'Liberadas a Atrasadas ⬆',
  };

  const [openFilter, setOpenFilter] = useState(false);

  const handleVisibility = () => setOpenFilter(!openFilter);

  const handleFilter = (event) => {
    let filter = event.target.value;
    setFilter(filter);
  };

  const handleToggle = () => {
    ids.forEach((id) => {
      toggleTodo(id);
    });
    resetCheckboxs();
  };

  const resetCheckboxs = () => {
    let ch = document.getElementsByClassName('SpecsCheckBox');
    for (let i = 0; i < ch.length; i++) {
      ch[i].checked = false;
    }
  };

  const showFilterName = (code) => {
    return filters[code];
  };

  return (
    <div className='Filters'>
      <Button color='primary' onClick={handleToggle}>
        Liberar seleccionadas
      </Button>

      <div className='FilterOptions'>
        {openFilter ? (
          <Select id='filters' value={activeFilter} onChange={handleFilter}>
            {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
              const currentFilter = VISIBILITY_FILTERS[filterKey];
              return (
                <MenuItem value={currentFilter} key={currentFilter}>
                  {showFilterName(currentFilter)}
                </MenuItem>
              );
            })}
          </Select>
        ) : null}
        <Button onClick={handleVisibility} color='primary'>
          <img className='Image' src={filterImg} alt='filter'></img>
          Ordenar
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter, ids: state.todos.ids };
};

export default connect(mapStateToProps, { setFilter, toggleTodo })(Filters);
