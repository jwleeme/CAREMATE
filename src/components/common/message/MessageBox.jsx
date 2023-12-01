import React, { useState } from 'react';
import styles from './MessageBox.module.scss';
import MessageList from './MessageList';
import ChattingRoom from './ChattingRoom';
import cs from 'classnames/bind';
import { chatId } from 'recoil/storage';
import { useRecoilValue, useSetRecoilState } from 'recoil';
const cx = cs.bind(styles);
// 메시지함 전체 감싸기 용도 컴포넌트(부모 컴포넌트)
export default function MessageBox (props) {
  // 채팅창 열기, 닫기 를 위한 전역상태
  const selectedChatId = useRecoilValue(chatId);
  const setSelectedChatId = useSetRecoilState(chatId);  // 전역 chatId 설정 리코일 함수
  return (
    <div className={cx('wrapper', { open: props.showmessagebox })}>
      <MessageList chatInfoSelect={setSelectedChatId} />
        {
        selectedChatId !== "" ? <ChattingRoom selectedChatId={selectedChatId} chatInfoSelect={setSelectedChatId} /> : null
        }
      </div>
  );
}

