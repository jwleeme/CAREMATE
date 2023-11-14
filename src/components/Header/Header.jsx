import React from 'react';
import styles from './Header.module.scss';
import cs from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = cs.bind(styles);

export default function Header() {
  return (
    <header>
      <div className={cx('wrapper')}>
        <h1>
          <Link to="/">쓰담쓰담</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="about-us">서비스 소개</Link>
            </li>
            <li>
              <Link to="/posts">돌봄서비스</Link>
            </li>
            <li>
              <Link to="/mypage">마이페이지</Link>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <Link to="/login">로그인</Link>
          </li>
          <li>
            <Link to="/register">회원가입</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
