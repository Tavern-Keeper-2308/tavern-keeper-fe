import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './MonsterFilter.css';

export const MonsterFilter = ({ onSizeFilterChange, onNameFilterChange, onArmorClassFilterChange, onHitPointsFilterChange, monsterList }) => {
  const [selectSizeFilter, setSelectSizeFilter] = useState('');
  const [selectNameFilter, setSelectNameFilter] = useState('');
  const [selectArmorClassFilter, setSelectArmorClassFilter] = useState('');
  const [selectHitPointsFilter, setSelectHitPointsFilter] = useState('');

  useEffect(() => {
    onSizeFilterChange(selectSizeFilter);
    onNameFilterChange(selectNameFilter);
    onArmorClassFilterChange(selectArmorClassFilter);
    onHitPointsFilterChange(selectHitPointsFilter);
  }, [selectSizeFilter, selectNameFilter, selectArmorClassFilter, selectHitPointsFilter, onSizeFilterChange, onNameFilterChange, onArmorClassFilterChange, onHitPointsFilterChange]);

  return (
    <div className='MonsterFilter'>
      <label htmlFor='select-size'>Filter By Size
        <select
          value={selectSizeFilter}
          id='select-size'
          onChange={(event) => {
            setSelectSizeFilter(event.currentTarget.value)
          }}
        >
          <option value=''>All Sizes</option>
          <option value='TINY'>Tiny</option>
          <option value='SMALL'>Small</option>
          <option value='MEDIUM'>Medium</option>
          <option value='LARGE'>Large</option>
          <option value='HUGE'>Huge</option>
          <option value='GARGANTUAN'>Gargantuan</option>
        </select>
      </label>

      <label htmlFor='select-name'>Filter By Name
        <select
          value={selectNameFilter}
          id='select-name'
          onChange={(event) => {
            setSelectNameFilter(event.currentTarget.value)
          }}
        >
          <option value=''>Any</option>
            {monsterList}
        </select>
      </label>

      <label htmlFor='select-armor-class'>Filter By Armor Class
        <input 
          id='select-armor-class'
          type="number" 
          name="armor class search"
          aria-label="armor class search" 
          value={selectArmorClassFilter} 
          placeholder="Armor Class" 
          onChange={(event) => {
          setSelectArmorClassFilter(event.currentTarget.value)}}
        >
        </input>
      </label>

      <label htmlFor='select-hit-points'>Filter By Hit Points
        <input 
          id='select-hit-points'
          type="number" 
          name="hit points search"
          value={selectHitPointsFilter}
          aria-label="hit points search" 
          placeholder="Hit Points" 
          onChange={(event)=> {setSelectHitPointsFilter(event.target.value)}}
        >
        </input>
      </label>

      <button
        id='reset-filters-button'
        className='builder-button'
        onClick={(e) => {
          e.preventDefault();
          setSelectSizeFilter('');
          setSelectNameFilter('');
          setSelectArmorClassFilter('');
          setSelectHitPointsFilter('');
        }}
      >Reset All Filters</button>
    </div>
  );
};

MonsterFilter.propTypes = {
  onArmorClassFilterChange: PropTypes.func.isRequired,
  onHitPointsFilterChange: PropTypes.func.isRequired,
  onSizeFilterChange: PropTypes.func.isRequired,
  onNameFilterChange: PropTypes.func.isRequired
}