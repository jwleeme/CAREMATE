import React from 'react';
import styles from './DatesPicker.module.scss';
import cs from 'classnames/bind';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
const cx = cs.bind(styles);

export default function DatesPicker({ values, setValues }) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setValues({ ...values, careDates: [new Date(start), new Date(end)] });
  };

  return (
    <DatePicker
      dateFormat="dd-MM-YYYY"
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      selectsDisabledDaysInRange
      locale={ko}
      inline
      minDate={new Date()}
    />
  );
}
