import {
  TextField,
  styled,
  Checkbox,
  Autocomplete
} from '@mui/material';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

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

const S1 = styled('div', { name: 'S1' })(() => ({
  display: 'flex',
  margin: 1
}));

// const columns = [
//   'اکسیژن',
//   'گاز بیهوشی',
//   'شفت-فلکه',
//   'شیر کنترل',
//   'Co2',
//   'آرگون',
//   'ازت',
//   'هوای خشک',
//   'آنتونکس',
//   'استیلن',
//   'گاز مایع'
// ];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function EnterExitCorporation() {
  const [selectedColumns, setSelectedColumns] = React.useState<
    Columns[]
  >([]);
  console.log(selectedColumns);

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

  function EditableHtmlTable() {
    return (
      <>
        <table border="2">
          <thead>
            <tr>
              <th>نوع سیلندر</th>
              {/* ک-م */}
              <th></th>
              {/* اکسیژن */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('اکسیژن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                اکسیژن
              </th>
              {/* گاز بیهوشی */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('گاز بیهوشی') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                گاز بیهوشی
              </th>
              {/* شفت-فلکه */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('شفت-فلکه') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                شفت-فلکه
              </th>
              {/* شیر کنترل */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('شیر کنترل') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                شیر کنترل
              </th>
              {/* Co2 */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('Co2') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                Co2
              </th>
              {/* آرگون */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('آرگون') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                آرگون
              </th>
              {/* ازت */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('ازت') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                ازت
              </th>
              {/* هوای خشک */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('هوای خشک') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                هوای خشک
              </th>
              {/* آنتونکس */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('آنتونکس') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                آنتونکس
              </th>
              {/* استیلن */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('استیلن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                استیلن
              </th>
              {/* گاز مایع */}
              <th
                style={{
                  display:
                    selectedColumns.indexOf('گاز مایع') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                گاز مایع
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              {/* نوع سیلندر */}
              <td rowSpan={2} style={{ textAlign: 'center' }}>
                50لیتری
              </td>
              {/* ک-م */}
              <td>ک</td>
              {/* اکسیژن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('اکسیژن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز بیهوشی */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز بیهوشی') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شفت-فلکه */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شفت-فلکه') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شیر کنترل */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شیر کنترل') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* Co2 */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('Co2') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آرگون */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آرگون') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* ازت */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('ازت') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* هوای خشک */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('هوای خشک') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آنتونکس */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آنتونکس') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* استیلن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('استیلن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز مایع */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز مایع') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
            </tr>

            <tr>
              {/* ک-م */}
              <td>م</td>
              {/* اکسیژن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('اکسیژن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز بیهوشی */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز بیهوشی') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شفت-فلکه */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شفت-فلکه') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شیر کنترل */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شیر کنترل') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* Co2 */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('Co2') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آرگون */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آرگون') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* ازت */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('ازت') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* هوای خشک */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('هوای خشک') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آنتونکس */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آنتونکس') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* استیلن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('استیلن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز مایع */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز مایع') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
            </tr>

            <tr>
              {/* نوع سیلندر */}
              <td rowSpan={2} style={{ textAlign: 'center' }}>
                40لیتری
              </td>
              {/* ک-م */}
              <td>ک</td>
              {/* اکسیژن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('اکسیژن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز بیهوشی */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز بیهوشی') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شفت-فلکه */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شفت-فلکه') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شیر کنترل */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شیر کنترل') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* Co2 */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('Co2') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آرگون */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آرگون') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* ازت */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('ازت') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* هوای خشک */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('هوای خشک') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آنتونکس */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آنتونکس') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* استیلن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('استیلن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز مایع */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز مایع') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
            </tr>

            <tr>
              {/* ک-م */}
              <td>م</td>
              {/* اکسیژن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('اکسیژن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز بیهوشی */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز بیهوشی') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شفت-فلکه */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شفت-فلکه') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* شیر کنترل */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('شیر کنترل') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* Co2 */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('Co2') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آرگون */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آرگون') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* ازت */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('ازت') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* هوای خشک */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('هوای خشک') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* آنتونکس */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('آنتونکس') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* استیلن */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('استیلن') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
              {/* گاز مایع */}
              <td
                style={{
                  display:
                    selectedColumns.indexOf('گاز مایع') > -1
                      ? 'table-cell'
                      : 'none'
                }}>
                <TextField sx={{ width: '100%' }} />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }

  return (
    <Form1 action="">
      <ExitCorporationForm />
      <Input1>
        <Label1>مشاهده ستون های جدول</Label1>
        <S1>
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
            style={{ width: '400px', minWidth: '160px' }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="برای انتخاب ضربه بزنید"
              />
            )}
          />
        </S1>
      </Input1>
      <Input1 sx={{ marginBottom: 3 }}>
        <Label1>جمع ثبت شده</Label1>
        <TextField />
      </Input1>
      <Row1 sx={{ justifyContent: 'center' }}>
        <EditableHtmlTable />
      </Row1>
    </Form1>
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
