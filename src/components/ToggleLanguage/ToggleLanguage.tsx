import { Option, Select } from '@mui/joy';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';
const languages = ['en', 'ua'];

const ToggleLanguage = () => {
  const language = localStorage.getItem('i18nextLng');
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (_event: React.SyntheticEvent | null, newValue: string | null) => {
    changeLanguage(newValue as string);
  };

  return (
    <Box>
      <Select
        onChange={handleChange}
        startDecorator={<MdLanguage />}
        defaultValue={language}
        color="primary"
        variant="outlined"
      >
        {languages &&
          languages.map((language: string) => (
            <Option key={language} value={language}>
              {language}
            </Option>
          ))}
      </Select>
    </Box>
  );
};

export default ToggleLanguage;
