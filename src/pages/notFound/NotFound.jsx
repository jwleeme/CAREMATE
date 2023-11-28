import React from 'react';
import styles from './NotFound.module.scss';
import cs from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = cs.bind(styles);

export default function NotFound() {
  return (
    <>
      <div className={cx('wrapper')}>
        <h2>404 ERROR</h2>
        <p>죄송합니다. 현재 찾을수 없는 페이지를 요청하셨습니다.</p>
        <p>페이지의 주소가 잘못 입력되었거나,</p>
        <p>주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.</p>
        <button>
          <Link to="/">홈으로</Link>
        </button>
      </div>
    </>
  );
}
