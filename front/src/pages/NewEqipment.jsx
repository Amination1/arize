import { styled, TextField, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
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
const Row1 = styled('div', { name: 'Row1' })(({ theme }) => ({
  flex: ' 0 0 100%',
  flexWrap: 'wrap',
  display: 'flex',
  marginBottom: '0.6em',
  alignItems: 'center'
}));

// دربرگیرنده لیبل و تکست فیلد
const Input1 = styled('div', { name: 'Input1' })(({ theme }) => ({
  flex: '1 0 155px',
  display: 'flex',
  flexDirection: 'column',
  margin: '1em 1em 0em 1em',
  flexWrap: 'nowrap'
}));

// لیبل بالای تکست فیلد
const Label1 = styled('label', { name: 'Label1' })(({ theme }) => ({
  marginBottom: '0.3em',
  fontSize: '.95em',
  fontWeight: '5000',
  color: '#777;',
  whiteSpace: 'nowrap'
}));

// switch that behinds the Input1
const Switch1 = styled('div', { name: 'Switch1' })(({ theme }) => ({
  backgroundColor: 'red',
  margin: '2.8em 0em 0em 1.5em',
  maxWidth: 'max-content'
}));

// switch that under the Input1
const Switch2 = styled('div', { name: 'Switch1' })(({ theme }) => ({
  backgroundColor: 'red',
  maxWidth: 'max-content'
}));

const Section = styled('div', { name: 'Section1' })(({ theme }) => ({
  flex: '0 0 100%',
  maxWidth: '100%',
  flexWrap: 'wrap',
  display: 'flex',
  padding: '1rem'
}));

const Titr = styled('div', { name: 'Titr1' })(({ theme }) => ({
  display: 'flex',
  flex: '0 0 100%',
  alignContent: 'center',
  alignItems: 'center',
  padding: '0em .4em',
  paddingBottom: '0.6em',
  color: '#333'
}));

export default function NewEqipment() {
  function Licence() {
    return (
      <>
        <Row1>
          <Input1>
            <Label1>نام تجهیز</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>مدل دستگاه</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>کارخانه سازنده</Label1>
            <TextField />
          </Input1>
        </Row1>
        <Row1>
          <Input1>
            <Label1>شماره سریال تجهیز</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>سال ساخت</Label1>
            <TextField />
          </Input1>
          <Input1>
            <Label1>سال نصب و راه اندازی</Label1>
            <TextField />
          </Input1>
        </Row1>
        <Row1>
          <Input1 sx={{ maxWidth: 'max-content' }}>
            <Label1>کد ترمینولوژی</Label1>
            <TextField />
          </Input1>
          <Input1 sx={{ maxWidth: 'max-content' }}>
            <Label1>آموزش کاربردی</Label1>
            <Switch2>سوییچ 123</Switch2>
          </Input1>
          <Input1>
            <Label1>دسته بندی</Label1>
            <TextField />
          </Input1>
        </Row1>
        <Section sx={{ padding: '1rem 0 ' }}>
          <Titr sx={{ padding: '0 1.5rem ' }}>
            <HomeIcon />
            <Typography sx={{ paddingRight: '5px' }}>شرکت پشتیبان</Typography>
          </Titr>
          <Row1>
            <Input1>
              <Label1> انتخاب شرکت</Label1>
              <TextField />
            </Input1>
            <Input1>
              <Label1>شماره تماس 1</Label1>
              <TextField />
            </Input1>
            <Input1>
              <Label1>شماره تماس 2</Label1>
              <TextField />
            </Input1>
          </Row1>
        </Section>
      </>
    );
  }

  return (
    <Form1 action="">
      <Licence />
    </Form1>
  );
}
