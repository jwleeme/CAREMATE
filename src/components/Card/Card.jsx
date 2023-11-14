import React from 'react';
import { BsEnvelope, BsPersonFill } from 'react-icons/bs';
import { FaRegHeart, FaMapMarkerAlt, FaCalendar, FaClock } from 'react-icons/fa';
import { PiMoneyFill } from 'react-icons/pi';
import targetImg from './draftImage.png';
import styles from './Card.module.scss';
import cs from 'classnames/bind';

const cx = cs.bind(styles);

const Card = ({
  post_id,
  region,
  care_target,
  target_features,
  preferredmate_age,
  preferredmate_gender,
  timestamp,
  title,
  care_term,
  care_days,
  start_time,
  end_time,
  hourly_rate,
  negotiable_rate,
  status,
  startDate,
  endDate,
}) => {
  return (
    <div className={cx('card')}>
      <div className={cx('mainInfo')}>
        <div className={cx('mainUpper')}>
          <img src={targetImg} alt="targetImage" className={cx('targetImage')} />
          <div className={cx('upperInfo')}>
            <span className={cx('careTerm')}>{care_term}</span>
            <span className={cx('timeStamp')}>등록일 {timestamp}</span>
            <span className={cx('cardStatus')}>{status}</span>
          </div>
        </div>
        <div className={cx('mainBottom')}>
          <h3 className={cx('title')}>{title}</h3>
          <BsEnvelope className={cx('messageIcon')} />
          <FaRegHeart className={cx('wishlistIcon')} />
        </div>
      </div>
      <div className={cx('extraInfo')}>
        <ul>
          <li className={cx('location')}>
            <FaMapMarkerAlt />
            {region}
          </li>
          <li className={cx('date')}>
            <FaCalendar />
            {startDate}~ {care_days}
          </li>
          <li className={cx('time')}>
            <FaClock />
            {start_time}, {end_time}
          </li>
          <li className={cx('preferMate')}>
            <BsPersonFill />
            {preferredmate_age} {preferredmate_gender}
          </li>
          <li className={cx('wage')}>
            <PiMoneyFill />
            {hourly_rate}원 협의
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
