import React from 'react';
import styles from './MessageList.module.scss';
import { ProfileImage } from 'assets/images';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

// 메시지함 리스트 컴포넌트 (채팅형식 UI - 레이어 팝업 형태)
export default function MessageList() {
  return (
    <>
      <div className={cx('wrapper')}>
        {/* 메시지함 전체 영역 */}
        <div className={cx('message-box')}>
          {/* 카테고리명 */}
          <h1>MESSAGE</h1>
          
          {/* 메시지함 리스트 영역 */}
          <div className={cx('message-list')}>
            {/* 메시지방 영역 */}
            <ul className={cx('message-items')}>


              {/* 대화 상대별 메시지방  - ui 구현을 위해 임시로 아래 내용 넣었습니다. */}
              <li className={cx('message-item')}>
                <img src={ProfileImage} alt="상대유저 프로필이미지" />
                <div className={cx('user-itembox')}>
                  <span className= {cx('username-keyword')}>홍길동/노인</span>
                  <p className={cx('message-text')}>가지고 계신 지병이 있나요?가지고 계신 지병이 있나요?가지고 계신 지병이 있나요?</p>
                </div>
                {/* 1차 기능 구현 목표 - 날짜/시분 모두 표시예정.
                추가기능 - 오늘날짜가 아니면 날짜로 표시, 오늘 날짜로 받은 채팅이면 시간 표시 예정. */}
                <div className={cx('date-box')}>
                  <p className={cx('last-date')}>2023-11-20</p>
                  <p className={cx('last-time')}>오후 2:30</p>
                </div>
              </li>
              {/* 2 */}
              <li className={cx('message-item')}>
                <img src={ProfileImage} alt="상대유저 프로필이미지" />
                <div className={cx('user-itembox')}>
                  <span className= {cx('username-keyword')}>김영희/아동</span>
                  <p className={cx('message-text')}>아이가 몇시에 등원하나요?</p>
                </div>
                <div className={cx('date-box')}>
                  <p className={cx('last-date')}>2023-11-15</p>
                  <p className={cx('last-time')}>오후 5:30</p>
                </div>
              </li>
              <li className={cx('message-item')}>
                <img src={ProfileImage} alt="상대유저 프로필이미지" />
                <div className={cx('user-itembox')}>
                  <span className= {cx('username-keyword')}>윤철수/장애인</span>
                  <p className={cx('message-text')}>살고 계신 위치가 어디인가요?</p>
                </div>
                <div className={cx('date-box')}>
                  <p className={cx('last-date')}>2023-11-10</p>
                  <p className={cx('last-time')}>오후 3:00</p>
                </div>
              </li>
              <li className={cx('message-item')}>
                <img src={ProfileImage} alt="상대유저 프로필이미지" />
                <div className={cx('user-itembox')}>
                  <span className= {cx('username-keyword')}>안미나/노인</span>
                  <p className={cx('message-text')}>할머니 연세가 어떻게되나요?</p>
                </div>
                <div className={cx('date-box')}>
                  <p className={cx('last-date')}>2023-10-19</p>
                  <p className={cx('last-time')}>오전 7:30</p>
                </div>
              </li>

              <li className={cx('message-item')}>
                <img src={ProfileImage} alt="상대유저 프로필이미지" />
                <div className={cx('user-itembox')}>
                  <span className= {cx('username-keyword')}>서미정/아동</span>
                  <p className={cx('message-text')}>혹시 시급 협의가 될까요?</p>
                </div>
                <div className={cx('date-box')}>
                  <p className={cx('last-date')}>2023-10-07</p>
                  <p className={cx('last-time')}>오전 8:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
     </div>
    </>
    
  )
}