import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './MyList.module.scss';
import { FaHeart } from 'react-icons/fa';
import { CiCircleCheck } from 'react-icons/ci';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function MyList(props) {
  const [postList, setPostList] = useState(props.postList);
  const [filteredPostList, setFilteredPostList] = useState([]);
  const [checkedId, setCheckedId] = useState([]); // 추후 localStorage 사용

  useEffect(() => {
    const filteredList = postList.filter((post) => post.title.includes(props.searchText));
    setFilteredPostList(filteredList);
  }, [props.searchText, postList]);

  const handleDeletePost = (id) => {
    // id로 del 요청
    const updatedList = postList.filter((post) => post._id !== id);
    setPostList(updatedList);
  };

  const handleChangeCheckbox = (id) => {
    const isChecked = checkedId.includes(id);
    let newCheckedId = [];

    if (isChecked) {
      newCheckedId = checkedId.filter((checked) => checked !== id);
    } else {
      newCheckedId = [...checkedId, id];
    }
    setCheckedId(newCheckedId);
  };

  return (
    <>
      {filteredPostList.length > 0 ? (
        filteredPostList.map((post, idx) => (
          <div key={`${post._id}-${idx}`} className={cx('post')}>
            {props.edit && <input type="checkbox" onChange={() => handleChangeCheckbox(post._id)} />}
            <Link to={`/posts/${post._id}`}>
              <span>{post.title}</span>
            </Link>
            {props.matching ? (
              <CiCircleCheck className={cx('whole')} />
            ) : props.role === '일반' ? (
              <button className={cx('deleteBtn')} onClick={() => handleDeletePost(post._id)}>
                삭제
              </button>
            ) : (
              <FaHeart className={cx('heart')} />
            )}
          </div>
        ))
      ) : (
        <div className={cx('nothing')}>검색결과가 없습니다.</div>
      )}
    </>
  );
}
