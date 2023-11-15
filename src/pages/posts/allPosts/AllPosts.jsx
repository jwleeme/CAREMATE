import React from 'react';
import styles from './AllPosts.module.scss';
import cs from 'classnames/bind';
import Card from '../../components/card/Card.jsx';
const cx = cs.bind(styles);

const sampleData = {
  post_id: 1,
  region: '부산시 어쩌구',
  care_target: 'child',
  target_features: 'Example Target Features',
  preferredmate_age: '20대, 30대',
  preferredmate_gender: '남성',
  author: 'John Doe',
  timestamp: '11/10',
  title: '5세 남아 등하원, 실내놀이 시터 구합니다.',
  care_term: '정기',
  care_days: '월 수 금',
  start_time: '09:00 AM',
  end_time: '05:00 PM',
  hourly_rate: '15,000',
  negotiable_rate: true,
  status: '예약 중',
  startDate: '2023-01-10',
  endDate: '2023-01-20',
};

export default function AllPosts() {
  return (
    <>
      <h1>전체 게시글 리스트</h1>
      <Card {...sampleData} />
    </>
  );
}
