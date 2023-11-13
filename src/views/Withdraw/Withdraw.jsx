import React from 'react';
import styles from './Withdraw.module.scss';
import cs from 'classnames/bind';
import { MySideBar, MyTitle } from '../../components';
const cx = cs.bind(styles);

export default function Withdraw() {
  const handelDeleteUser = () => {
    if (window.confirm('정말 탈퇴하시겠습니까?')) {
    }
  };
  return (
    <div className={cx('mypage')}>
      <div className={cx('sidebar')}>
        <MySideBar />
      </div>
      <main>
        <MyTitle text="회원탈퇴" />
        <div className={cx('content')}>
          <h1>회원을 탈퇴하시겠습니까?</h1>
          <div>
            <button className={cx('cancel')}>취소</button>
            <button className={cx('confirm')} onClick={handelDeleteUser}>
              탈퇴하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
