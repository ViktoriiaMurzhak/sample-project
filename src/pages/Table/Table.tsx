import { Box, Typography, Input, FormControl, FormLabel } from '@mui/joy';
import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import TableData from '../../components/Profile/TableData';
import { Users } from '../../utils/types';

const Table = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Users[] | []>([]);
  const [filteredUsers, setFilteredUsers] = useState<Users[] | []>(data);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleFilter = () => {
    const filtered = data?.filter((user: Users) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(resp => {
          return resp.json();
        })
        .then(data => {
          setData(data);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    handleFilter();
  }, [searchTerm, data]);

  return (
    <Box sx={{ mb: 3, pl: 3, width: '100%' }}>
      <Typography level="h2" sx={{ p: '20px 0 ' }}>
        {t('sidebar_nav_table')}
      </Typography>

      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: 'sm',
          py: 2,
          display: {
            xs: 'none',
            sm: 'flex',
          },
          flexWrap: 'wrap',
          gap: 1.5,
          '& > *': {
            minWidth: {
              xs: '120px',
              md: '160px',
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>{t('table_search_label')}</FormLabel>
          <Input
            size="sm"
            placeholder={t('table_search_placeholder')}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </FormControl>
      </Box>
      <TableData data={filteredUsers} />
    </Box>
  );
};

export default Table;
