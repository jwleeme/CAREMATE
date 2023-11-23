import React from 'react';
import styles from './MessageBox.module.scss';
import MessageList from './MessageList';
import ChattingRoom from './ChattingRoom';
import cs from'classnames/bind';
const cx = cs.bind(styles); 


// 메시지함 전체 감싸기 용도 컴포넌트
export default function MessageBox () {
  return (
    <>
      <div className={cx('wrapper')}>
        <MessageList />
        <ChattingRoom />
      </div>
    </>
  );
}

