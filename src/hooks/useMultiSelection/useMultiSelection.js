import React from 'react';

export function useMultiSelection() {
  const [checkedList, setCheckedList] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  function checkedItemHandler(value, isChecked) {
    if (isChecked) {
      setCheckedList((prev) => [...prev, value]);
      return;
    }
    if (!isChecked && checkedList.includes(value)) {
      setCheckedList(checkedList.filter((item) => item !== value));
      return;
    }
    return;
  }
  function checkHandler(e, value) {
    setIsChecked(!isChecked);
    checkedItemHandler(value, e.target.checked);
  }
  return { checkHandler };
}
