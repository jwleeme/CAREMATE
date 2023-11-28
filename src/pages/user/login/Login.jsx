import React, { useState } from 'react';
import styles from './Login.module.scss';
import cs from 'classnames/bind';
import { usePostLogin } from '../../../hooks/postLogin';
import Logo from '../../../assets/images/logo.png';
const cx = cs.bind(styles);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { mutate } = usePostLogin(email, password);

  const handleSubmit = () => {
    mutate();
  };

  return (
    <div className={cx('wrapper')}>
      <img className={cx('logo')} src={Logo} alt="로고" />
      <div className={cx('loginContainer')}>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <button onClick={handleSubmit}>로그인</button>
      </div>
    </div>
  );
}
