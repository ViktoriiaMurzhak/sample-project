import { Typography, Checkbox } from '@mui/joy';
import React, { Dispatch, SetStateAction } from 'react';

import { Users } from '../../../utils/types';

const TableDataItem = ({
  data,
  selected,
  setSelected,
}: {
  data: Users;
  selected: readonly number[];
  setSelected: Dispatch<SetStateAction<readonly number[]>>;
}) => {
  return (
    <>
      <tr key={data.id}>
        <td style={{ textAlign: 'center', width: 120 }}>
          <Checkbox
            size="sm"
            checked={selected.includes(data.id)}
            color={selected.includes(data.id) ? 'primary' : undefined}
            onChange={event => {
              setSelected((ids: readonly number[]) =>
                event.target.checked
                  ? ids.concat(data.id)
                  : ids.filter((itemId: number) => itemId !== data.id)
              );
            }}
            slotProps={{ checkbox: { sx: { textAlign: 'left' } } }}
            sx={{ verticalAlign: 'text-bottom' }}
          />
        </td>
        <td>
          <Typography level="title-md">{(data.name && data.name) || 'no name'}</Typography>
        </td>
        <td>
          <Typography level="body-xs">{data.company.name}</Typography>
        </td>
        <td>
          <Typography level="body-xs">{data.phone}</Typography>
        </td>
        <td>
          <Typography level="body-xs">{data.username}</Typography>
        </td>
        <td>
          <a href={`mailto:${data.email}`}>
            <Typography level="body-xs" color="primary">
              {data.email}
            </Typography>
          </a>
        </td>

        <td>
          <Typography level="body-xs">{data.website}</Typography>
        </td>
      </tr>
    </>
  );
};
export default TableDataItem;
