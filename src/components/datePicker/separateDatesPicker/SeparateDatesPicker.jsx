import React from 'react';
import styles from './SeparateDatesPicker.module.scss';
import cs from 'classnames/bind';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
const cx = cs.bind(styles);

export default function SeparateDatesPicker({ values, setValues }) {
  return (
    <DatePicker
      highlightDates={[...values.shortCareDates]}
      onChange={(date) => {
        setValues({ ...values, shortCareDates: [...values.shortCareDates, date] });
        return;
      }}
      minDate={new Date()}
      selectsDisabledDaysInRange
      disabledKeyboardNavigation
      locale={ko}
      inline
    />
  );
}
