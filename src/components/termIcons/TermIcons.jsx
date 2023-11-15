import React from 'react';
import styles from './Card.module.scss';
import cs from 'classnames/bind';

const cx = cs.bind(styles);

const ShortTermIcon = (care_term) => {
  <>
    <span className={cx('careTerm')}>{care_term}</span>
  </>;
};

export default ShortTermIcon;
