import React, { useState } from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import filterImg from '../../assets/filter-solid.svg';
import { setFilter } from '../../redux/actions';
import { VISIBILITY_FILTERS } from '../../constants';

const Filters = ({ activeFilter, setFilter }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleVisibility = () => setOpenFilter(!openFilter);

  const handleFilter = (event) => {
    let filter = event.target.value;
    setFilter(filter);
  };

  return (
    <div className='Filters'>
      <img
        onClick={handleVisibility}
        className='Image'
        src={filterImg}
        alt='filter'
      ></img>

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
          {/* 
            <option value='dateMayToMen'>Fecha de Creacion &#8593;</option>
            <option value='finishDateMenToMay'>
              Fecha de Vencimiento &#8595;
            </option>
          */}
        </select>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(Filters);
