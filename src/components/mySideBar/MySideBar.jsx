import React from 'react';
import styles from './MySideBar.module.scss';
import cs from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = cs.bind(styles);

export default function MySideBar() {
  return (
    <div className={cx('sidebar')}>
      <ul className={cx('section')}>
        <li className={cx('user')}>
          <Link to="/mypage">회원정보</Link>
          <ul>
            <li>
              <Link to="/mypage">회원정보 조회/수정</Link>
            </li>
            <li>
              <Link to="/mypage/withdraw">회원 탈퇴</Link>
            </li>
          </ul>
        </li>
        <li className={cx('post')}>
          <Link to="/mypage/posts">게시글 리스트</Link>
          <ul>
            <li>
              <Link to="/mypage/posts">MY 등록게시물</Link>
            </li>
            <li>
              <Link to="/mypage/wishlist">찜한 돌봄 서비스</Link>
            </li>
            <li>
              <Link to="/mypage">매칭 완료된 리스트</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
