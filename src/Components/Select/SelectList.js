import React from 'react';
import PropTypes from 'prop-types';
import SelectItem from './SelectItem';

import { yearList, sortByList } from '../../shared/List';

const SelectList = ({ year, sort, onChange }) => (
  <form>
    <SelectItem
      name='year'
      options={yearList}
      label='Year'
      selected={year}
      onChange={(value, name) => onChange(value, name)}
    />
    <SelectItem
      name='sort'
      options={sortByList}
      label='Sort By'
      selected={sort}
      onChange={(value, name) => onChange(value, name)}
    />
  </form>
);

SelectList.propTypes = {
  year: PropTypes.object.isRequired,
  sort: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectList;
