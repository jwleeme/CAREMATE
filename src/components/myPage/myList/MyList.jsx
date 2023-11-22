import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyList.module.scss';
import { FaHeart } from 'react-icons/fa';
import { PiTrashFill } from 'react-icons/pi';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function MyList({ postList, searchText, role, edit, checkedId, onChangeCheckbox, matching }) {
  const [filteredPostList, setFilteredPostList] = useState([]);

  useEffect(() => {
    const filteredList = postList.filter((post) => post.title.includes(searchText));
    setFilteredPostList(filteredList);
  }, [searchText, postList]);

  const handleDeletePost = (id) => {
    // id로 del 요청 > 데이터 get 요청
    if (window.confirm('해당 게시글을 삭제하시겠습니까?')) {
    }
  };

  return (
    <div className={cx('wrapper')}>
      {filteredPostList.length > 0 ? (
        filteredPostList.map((post, idx) => (
          <div key={`${post._id}-${idx}`} className={cx('post')}>
            {edit && (
              <input
                type="checkbox"
                checked={checkedId && checkedId.includes(post._id)}
                onChange={() => onChangeCheckbox(post._id)}
              />
            )}
            {matching && <span className={cx('matched-name')}>{post.matched}님과 매칭</span>}
            <Link to={`/posts/${post._id}`}>
              <span className={cx('title')}>{post.title}</span>
            </Link>
            {matching ? (
              ''
            ) : role === '일반' ? (
              <PiTrashFill className={cx('delete-button')} onClick={() => handleDeletePost(post._id)} size="18" />
            ) : (
              <FaHeart className={cx('heart')} />
            )}
          </div>
        ))
      ) : (
        <div className={cx('nothing')}>검색결과가 없습니다.</div>
      )}
    </div>
  );
}