import React from 'react';
import styles from './AuthInput.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

const InputStatus = {
  NORMAL: 'normal',
  ERROR: 'error',
  SUCCESS: 'success',
};

export default function AuthInput({
  text,
  status = InputStatus.NORMAL,
  placeholder,
  name,
  type,
  value,
  onChange,
  message,
  isConfirm,
  isCode,
}) {
  return (
    <>
      <div className={cx('authWrapper')} status={status}>
        <label htmlFor={name}>{text}</label>
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={cx({ inputWithButton: isConfirm || isCode })}
        />
        {isCode && <button>코드전송</button>}
        {isConfirm && <button>인증확인</button>}
      </div>
      <div className={cx('messageContainer')}>
        <p>{message}</p>
      </div>
    </>
  );
}
