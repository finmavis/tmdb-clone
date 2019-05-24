import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputGroup = styled.div`
  display: inline-block;
  width: 100%;
  max-width: ${props => (props.name === 'year' ? '15rem' : '25rem')};

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;

const SelectItem = ({ options, label, name, selected, onChange }) => (
  <InputGroup name={name}>
    <label>{label}</label>
    <Select
      options={options}
      onChange={value => onChange(value, name)}
      value={selected}
    />
  </InputGroup>
);

SelectItem.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectItem;
