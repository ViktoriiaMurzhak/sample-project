import { Table } from '@mui/joy';
import React, { useState } from 'react';
import Checkbox from '@mui/joy/Checkbox';

import HistoryItem from './TableDataItem';
import { useTranslation } from 'react-i18next';
import { Users } from '../../../utils/types';

const TableData = ({ data }: { data: Users[] }) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<readonly number[]>([]);

  return (
    <Table
      aria-labelledby="tableTitle"
      stickyHeader
      hoverRow
      sx={{
        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
        '--Table-headerUnderlineThickness': '1px',
        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
        '--TableCell-paddingY': '4px',
        '--TableCell-paddingX': '8px',
        tableLayout: 'auto',
      }}
    >
      <thead>
        <tr>
          <th style={{ textAlign: 'center', width: 48 }}>
            <Checkbox
              size="sm"
              indeterminate={selected.length > 0 && selected.length !== data?.length}
              checked={selected.length === data?.length}
              onChange={event => {
                setSelected(event.target.checked ? data?.map((row: { id: number }) => row.id) : []);
              }}
              color={
                selected.length > 0 || selected.length === data?.length ? 'primary' : undefined
              }
              sx={{ verticalAlign: 'text-bottom' }}
            />
          </th>
          <th>{t('table_name')}</th>
          <th>{t('table_company')}</th>
          <th>{t('table_phone')}</th>
          <th>{t('table_username')}</th>
          <th>{t('table_email')}</th>
          <th>{t('table_website')}</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((d: Users) => (
          <HistoryItem key={d.id} data={d} selected={selected} setSelected={setSelected} />
        ))}
      </tbody>
    </Table>
  );
};
export default TableData;
