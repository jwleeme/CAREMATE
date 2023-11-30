import React, { useState, useEffect } from 'react';
import styles from './MessageButton.module.scss';
import { useNavigate } from 'react-router';
import { MessageBtn } from 'assets/images';
import MessageBox from './MessageBox';
import cs from 'classnames/bind';
import { isLoggedInState } from 'recoil/isLoggedInState';
import { messageBoxState, chatId } from 'recoil/storage';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const cx = cs.bind(styles);

// 메시지함(채팅하기) 버튼 (회원만 해당 서비스 이용 가능)
export default function MessageButton() {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  // 팝업 애니메이션 효과 클래스를 붙이기위한 state
  const [showmessagebox, setShowMessageBox] = useState(false);
  const [elementState, setElementState] = useState(false);

  // 메세지함 팝업 열기, 닫기 를 위한 전역상태
  const popupState = useRecoilValue(messageBoxState);
  const setPopupState = useSetRecoilState(messageBoxState);

  const setSelectedChatId = useSetRecoilState(chatId);  // 전역 chatId 설정 리코일 함수

  // 라우터
  const navigate = useNavigate();

  const toggleMessageBox = (flag) => {
    if (isLoggedIn === 'LOGGED_IN') {
      if (flag) {
        setElementState(flag)
        setTimeout(() => {
          setShowMessageBox(flag);
          setPopupState(flag);
        }, 200);
      } else {
        setShowMessageBox(flag);
        setTimeout(() => {
          setElementState(flag)
          setPopupState(flag);
          setSelectedChatId(''); // 메시지함 버튼으로 채팅방 닫을때 chatId 초기화처리.
        }, 400);
      }
    } else {
      alert('로그인된 유저만 이용 가능한 서비스입니다.');
      navigate('/login');
    }
  };

  useEffect(() => {
    if (popupState) toggleMessageBox(popupState);
  }, [popupState])

  return (
    <>
      <div className={cx('wrapper')}>
        <button
          onClick={() => {
            toggleMessageBox(!popupState);
          }}
          className={cx('message-box-btn')}
        >
          <img src={MessageBtn} alt="메시지함 버튼 이미지" />
        </button>

        {elementState === true ? <MessageBox showmessagebox={showmessagebox} /> : null}
      </div>
    </>
  );
}
