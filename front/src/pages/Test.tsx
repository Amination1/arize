import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  const [selectedColumns, setSelectedColumns] = React.useState<
    Columns[]
  >([]);
  console.log(selectedColumns);

  return (
    <>
      <Autocomplete
        sx={{
          '& .MuiAutocomplete-inputRoot': {
            minHeight: '40px',
            height: 'auto'
          },
          '& .MuiChip-root': { flexDirection: 'row-reverse' }
        }}
        limitTags={2}
        multiple
        id="checkboxes-tags-demo"
        options={columns}
        disableCloseOnSelect
        value={selectedColumns}
        onChange={(_event, newValues) => {
          setSelectedColumns(newValues);
        }}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        )}
        style={{ width: 500 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="برای انتخاب ضربه بزنید"
          />
        )}
      />
    </>
  );
}

interface Columns {
  id: number;
  name: string;
}

const columns: Columns[] = [
  { id: 1, name: 'اکسیژن' },
  { id: 2, name: 'گاز بیهوشی' },
  { id: 3, name: 'شفت-فلکه' },
  { id: 4, name: 'شیر کنترل' },
  { id: 5, name: 'Co2' },
  { id: 6, name: 'ازت' },
  { id: 7, name: 'هوای خشک' },
  { id: 8, name: 'آنتونکس' },
  { id: 9, name: 'استیلن' },
  { id: 10, name: 'گاز مایع' }
];
