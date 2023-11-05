import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import CustomDropdown from './CustomDropdown';





const Country = () => {
    const [selectedCountry, setSelectedCountry] = useState('GB');
    const [isDropdownExpanded, setIsDropdownExpanded] = useState(false);

const handleCountryChange = (selectedOption) => {
  setSelectedCountry(selectedOption.value);
};

const countryOptions = [
    { value: 'GB', label: 'EN', flag: 'https://flagcdn.com/gb.svg' },
    { value: 'IT', label: 'Italy', flag: 'https://flagcdn.com/it.svg' },
    { value: 'RU', label: 'Russia', flag: 'https://flagcdn.com/ru.svg' },
    { value: 'ES', label: 'Spain', flag: 'https://flagcdn.com/es.svg' },
    { value: 'PT', label: 'Portugal', flag: 'https://flagcdn.com/pt.svg' },
    { value: 'DE', label: 'Germany', flag: 'https://flagcdn.com/de.svg' },
    { value: 'FR', label: 'France', flag: 'https://flagcdn.com/fr.svg' },
    { value: 'CN', label: 'China', flag: 'https://flagcdn.com/cn.svg' },
    { value: 'NL', label: 'Netherlands', flag: 'https://flagcdn.com/nl.svg' }
];

const handleDropdownClick = () => {
    setIsDropdownExpanded((prev) => !prev);
  };

  return (
    <Box position={'fixed'} bottom="1rem" left="1rem" cursor={'pointer'} >

      <CustomDropdown
        options={countryOptions}
        value={selectedCountry}
        onChange={handleCountryChange}
        isExpanded={isDropdownExpanded}
        onClick={handleDropdownClick}
        />
        
    </Box>
  )
}

export default Country
