import React from 'react';
import './Tasks.css';
import { connect } from 'react-redux';
import filterImg from '../../assets/filter-solid.svg';
import { setFilter } from '../../redux/actions';

const Filters = () => {
  return (
    <div className='Filters'>
      <img className='Image' src={filterImg} alt='filter'></img>

      <select id='filters'>
        <option value='dateMayToMen'>Fecha de Creacion &#8593;</option>
        <option value='finishDateMenToMay'>Fecha de Vencimiento &#8595;</option>
        <option value='statusMayToMen'>Estado</option>
      </select>
    </div>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    filter: () => dispatch({ setFilter }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
