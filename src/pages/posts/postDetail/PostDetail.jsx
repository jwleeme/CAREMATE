import React from 'react';
import styles from './PostDetail.module.scss';
import cs from 'classnames/bind';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const cx = cs.bind(styles);

export default function PostDetail() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('writer-wrapper')}>
        <p className={cx('writer-image')}>프로필 사진</p>
        <span>이름</span>
      </div>

      <div className={cx('title-wrapper')}>
        <div>
          <p>영아 1명, 어린이 1명</p>
          <p className={cx('title')}>등하원 시터 구합니다</p>
          <p>11/2 시작</p>
          <p>월 수 금 | 단기</p>
          <p>선호 메이트: 20대, 30대, 여성</p>
          <p className={cx('hourly-rate')}>시급 15,000원 (협의)</p>
        </div>
        <div className={cx('button-wrapper')}>
          <select name="" className={cx('service-Status')}>
            <option value="">모집중</option>
            <option value="">예약중</option>
            <option value="">완료</option>
          </select>
          <span>
            <Link to="/posts/new">글작성(임시, 원래는 수정하기버튼)</Link>
          </span>
          <span className={cx('remove-Post')}>
            <FiTrash />
          </span>
        </div>
      </div>
      <div className={cx('body-Wrapper')}>
        <p className={cx('main-Body')}>글 본문: </p>
        <p>돌봄대상 특징: </p>
        <p>돌봄대상 유의사항: </p>
      </div>
    </div>
  );
}
