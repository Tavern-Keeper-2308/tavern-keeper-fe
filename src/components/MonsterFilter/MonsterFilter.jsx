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
          type="number" 
          aria-label="armor class search" 
          value={selectArmorClassFilter} 
          placeholder="Armor Class" 
          onChange={(event) => {
          setSelectArmorClassFilter(event.currentTarget.value)}}
        >
        </input>

        {/* <select
          value={selectArmorClassFilter}
          id='select-size'
          onChange={(event) => {
            setSelectArmorClassFilter(event.currentTarget.value)
          }}
        >
          <option value=''>Any</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
        </select> */}
      </label>

      <label htmlFor='select-hit-points'>Filter By Hit Points
        <input 
          type="number" 
          aria-label="hit points search" 
          placeholder="Hit Points" 
          onChange={(event)=> {setSelectHitPointsFilter(event.target.value)}}
        >
        </input>
      </label>

      <button
        id='reset-filters-button'
        className='reset-filters-button'
        onClick={() => {
          setSelectSizeFilter('')
          setSelectNameFilter('')
          setSelectArmorClassFilter('')
          setSelectHitPointsFilter('')
        }}
      >Reset All Filters</button>
    </div>
  );
};

MonsterFilter.propTypes = {
  // onArmorClassFilterChange: PropTypes.func.isRequired,
  // onHitPointsFilterChange: PropTypes.func.isRequired,
  // onSizeFilterChange: PropTypes.func.isRequired,
  // onNameFilterChange: PropTypes.func.isRequired
}