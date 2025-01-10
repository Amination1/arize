import {
  TextField,
  ListItemText,
  styled,
  Checkbox,
  Select,
  MenuItem
} from '@mui/material';
import React from 'react';

const Form1 = styled('form', { name: 'form1' })(({ theme }) => ({
  flexBasis: '100%',
  maxWidth: '1100px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  padding: theme.spacing(2)
}));

// هر کدوم رو که خواستیم حتما یک ردیف کامل برا خودش بگیره
const Row1 = styled('div', { name: 'Row1' })(() => ({
  flex: ' 0 0 100%',
  flexWrap: 'wrap',
  display: 'flex',
  marginBottom: '0.6em',
  alignItems: 'center'
}));

// دربرگیرنده لیبل و تکست فیلد
const Input1 = styled('div', { name: 'Input1' })(() => ({
  flex: '1 0 155px',
  display: 'flex',
  flexDirection: 'column',
  margin: '1em 1em 0em 1em',
  flexWrap: 'nowrap'
}));

// لیبل بالای تکست فیلد
const Label1 = styled('label', { name: 'Label1' })(() => ({
  marginBottom: '0.3em',
  fontSize: '.95em',
  fontWeight: '5000',
  color: '#777;',
  whiteSpace: 'nowrap'
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const S1 = styled('div', { name: 'S1' })(() => ({
  display: 'flex',
  margin: 1,
  '& .MuiOutlinedInput-root': { flex: '1 0 155px' }
}));

const columns = [
  'اکسیژن',
  'گاز بیهوشی',
  'شفت-فلکه',
  'شیر کنترل',
  'Co2',
  'آرگون',
  'ازت',
  'هوای خشک',
  'آنتونکس',
  'استیلن',
  'گاز مایع'
];

export default function EnterExitCorporation() {
  const [selectedColumns, setSelectedColumns] = React.useState([
    'اکسیژن',
    'گاز بیهوشی'
  ]);

  const handleChange = (event) => {
    const {
      target: { value }
    } = event;
    setSelectedColumns(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  function ExitCorporationForm() {
    return (
      <>
        <Row1>
          <Input1>
            <Label1>شماره ثبت فرم</Label1>
            <TextField disabled />
          </Input1>
          <Input1>
            <Label1>شماره گردش کار</Label1>
            <TextField disabled />
          </Input1>
          <Input1>
            <Label1>نماینده شرکت</Label1>
            <TextField disabled />
          </Input1>
          <Input1>
            <Label1>تاریخ ثبت حواله</Label1>
            <TextField disabled />
          </Input1>
        </Row1>
        <Row1>
          <Input1>
            <Label1>شماره حواله</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>تحویل دهنده</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>توضیحات ارسال</Label1>
            <TextField />
          </Input1>
        </Row1>
        <Row1>
          <Input1>
            <Label1>نام ترابری</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>شماره 1 ترابری</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>شماره 2 ترابری</Label1>
            <TextField />
          </Input1>
        </Row1>
      </>
    );
  }

  return (
    <Form1 action="">
      <ExitCorporationForm />
      <Input1>
        <Label1>مشاهده ستون های جدول</Label1>
        <S1>
          <Select
            id="SelectColumns1"
            multiple
            value={selectedColumns}
            onChange={handleChange}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}>
            {columns.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox
                  checked={selectedColumns.indexOf(name) > -1}
                />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </S1>
      </Input1>
      <Input1 sx={{ marginBottom: 3 }}>
        <Label1>جمع ثبت شده</Label1>
        <TextField />
      </Input1>
    </Form1>
  );
}
