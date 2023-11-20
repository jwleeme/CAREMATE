import React from 'react';
import styles from './MyTitle.module.scss';
import Senior from 'assets/images/senior2.png';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function MyTitle({ text }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('title')}>
        <div className={cx('img-container')}>
          <img src={Senior} alt="캐릭터" />
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
}
