import React from 'react';
import styles from './MyTitle.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function MyPageSideBar(props) {
  return (
    <div className={cx('title')}>
      <img src="https://ifh.cc/g/zyKAbq.png" />
      <span>{props.text}</span>
    </div>
  );
}
