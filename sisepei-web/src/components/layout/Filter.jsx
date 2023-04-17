import React from 'react';
import './style.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';

function Filter({ onFilterChange }) {
  const [filterOptions, setFilterOptions] = useState([
    { label: 'EXTENSAO', checked: false },
    { label: 'INOVACAO', checked: false },
    { label: 'PESQUISA', checked: false },
  ]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleApplyFilter = () => {
    alert("O filtro foi aplicado com sucesso!");
    setSelectedOptions(filterOptions.filter((option) => option.checked));
    
  };    

  const handleFilterChange = (event) => {
    const { name, checked } = event.target;
    setFilterOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.label === name ? { ...option, checked } : option
      )
    );
  };

  useEffect(() => {
    onFilterChange(selectedOptions);
  }, [selectedOptions, onFilterChange]);

  return ( 
    <div className='filter'>
      <Dropdown >
        <div className="filter-button">
          <Dropdown.Toggle >
            <img src="https://cdn.discordapp.com/attachments/440326168491720705/1092167357172027432/filter_1.png" alt="filtro" className="filter-icon" />
          </Dropdown.Toggle>
        </div>
        <Dropdown.Menu>
          
            <div className="filter-items">
              {filterOptions.map((option) => {
                return (
                  <div className="item mb-3">                    
                    <input type="checkbox" id={option.label} name={option.label} label={option.label} value={option.label} onChange={handleFilterChange} />
                    &nbsp;
                    <label for={option.label}>{option.label}</label>
                  </div>
                );
              })}
          </div>

          <Dropdown.Divider />

          <button onClick={handleApplyFilter} className='aplicar-filtro'>Aplicar Filtro</button>

        </Dropdown.Menu>

      </Dropdown>
      
    </div>
    
  );
  
}
export default Filter;