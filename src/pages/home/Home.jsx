import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';
import cs from 'classnames/bind';
import InfantImage from '../../assets/images/infant.png';
import SeniorOneImage from '../../assets/images/SeniorOne.png';
import Challanged from '../../assets/images/challenged.png';
import MainLogo from '../../assets/images/logo.png';
import InfantItem from '../../assets/images/infant-item.png';
import SeniorItem from '../../assets/images/senior-item.png';
import DisabledItem from '../../assets/images/disabled-item.png';
import HomeCard from 'components/home/HomeCard';
import { useRecoilValue } from 'recoil';
import { roleState } from 'recoil/roleStateAtom';

const cx = cs.bind(styles);

export default function Home() {
  const role = useRecoilValue(roleState);
  const naviagate = useNavigate();
  return (
    <div className={cx('wrapper')}>
      <div className={cx('mainImage')}>
        <img src={MainLogo} alt="메인로고" />
      </div>
      <div className={cx('cardContainer')}>
        <HomeCard
          onClick={() => {
            if (role === 'user') {
              naviagate('/posts/new?careTarget=아동');
            } else {
              naviagate('/posts?careTarget=아동');
            }
          }}
          className={'infant'}
          name={'아동'}
          src={InfantImage}
        />
        <HomeCard
          onClick={() => {
            if (role === 'user') {
              naviagate('/posts/new?careTarget=노인');
            } else {
              naviagate('/posts?careTarget=노인');
            }
          }}
          className={'seniorOne'}
          name={'노인'}
          src={SeniorOneImage}
        />
        <HomeCard
          onClick={() => {
            if (role === 'user') {
              naviagate('/posts/new?careTarget=장애인');
            } else {
              naviagate('/posts?careTarget=장애인');
            }
          }}
          className={'disabled'}
          name={'장애인'}
          src={Challanged}
        />
      </div>

      <div className={cx('commentBox')}>
        <span className={cx('infantItem')}>
          <img src={InfantItem} alt="아동이미지" />
        </span>
        <span className={cx('seniorItem')}>
          <img src={SeniorItem} alt="노인이미지" />
        </span>
        <span className={cx('disabledItem')}>
          <img src={DisabledItem} alt="장애인이미지" />
        </span>
        <div className={cx('comment')}>
          우리는 일함으로 생계를 유지하지만,
          <br />
          나눔으로 인생을 만든다. <br />
          <br />- 윈스턴 처칠
        </div>
      </div>
    </div>
  );
}
