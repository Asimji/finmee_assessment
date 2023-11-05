import React from 'react';
import Select from 'react-select';
import './CustomDropdown.css';
import { Flex, Text } from '@chakra-ui/react';

const CustomDropdown = ({ options, value, onChange, onClick ,isExpanded }) => {
    console.log(isExpanded)
  return (
    <Select
    value={options.find((option) => option.value === value)}
    onChange={onChange && onClick}
    
    options={options}
    isSearchable={false}
    className="custom-dropdown" 
    classNamePrefix="custom-dropdown"
    styles={{
      control: (provided) => ({
        ...provided,
        width: 140, 
        height:50,
       
      }),
    
    }}
    getOptionLabel={(option) => (
      <Flex fontSize={'20px'} fontWeight={'500'} lineHeight={'28px'} >
        <img src={option.flag} alt={option.label} style={{ width: '40px', marginRight: '8px' }} />
        <Text >
        {option.label}
        </Text>
      </Flex>
    )}
  />
  );
};

export default CustomDropdown;
