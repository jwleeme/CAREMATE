import React from 'react';
import styles from './MyEdit.module.scss';
import cs from 'classnames/bind';
import { MySideBar, MyTitle } from '../../components';
const cx = cs.bind(styles);

export default function MyEdit() {
  return (
    <div className={cx('mypage')}>
      <div className={cx('sidebar')}>
        <MySideBar />
      </div>
      <main>
        <MyTitle text="MY PAGE" />
        <div className={cx('content')}>
          <div className={cx('profile')}>
            <img src="https://ifh.cc/g/FpjRf1.jpg" alt="프로필사진" />
          </div>
          <div className={cx('info')}>
            <div className={cx('left')}>
              <div className={cx('email')}>
                <h2>Email</h2>
                <input type="text">{}</input>
              </div>
              <div className={cx('name')}>
                <h2>이름</h2>
                <p>{}</p>
              </div>
              <div className={cx('phone')}>
                <h2>전화번호</h2>
                <p>{}</p>
              </div>
            </div>
            <div className={cx('right')}>
              <div className={cx('age')}>
                <h2>나이</h2>
                <p>{}세</p>
              </div>
              <div className={cx('gender')}>
                <h2>성별</h2>
                <p>{}</p>
              </div>
              <div className={cx('region')}>
                <h2>지역</h2>
                <p>{}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('introduce')}>
          <h1>INTRODUCE</h1>
          <input type="text" />
          <p>{}</p>
        </div>
      </main>
    </div>
  );
}
