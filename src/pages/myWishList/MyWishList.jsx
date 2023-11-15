import React, { useState } from 'react';
import styles from './MyWishList.module.scss';
import cs from 'classnames/bind';
import { MyTitle, MySideBar, MySearch, MyList, Pagination } from '../../components';
const cx = cs.bind(styles);

export default function MyWishList() {
  const postList = [
    {
      _id: '1234',
      title: '8시부터 10시까지 돌봄 서비스 요청합니다.',
    },
    {
      _id: '12345',
      title: '등하원 시터 구합니다.',
    },
    {
      _id: '12346',
      title: '8시부터 10시까지 돌봄 서비스 요청합니다.',
    },
    {
      _id: '12347',
      title: '등하원 시터 구합니다.',
    },
    {
      _id: '12348',
      title: '8시부터 10시까지 돌봄 서비스 요청합니다.',
    },
    {
      _id: '12349',
      title: '등하원 시터 구합니다.',
    },
    {
      _id: '123410',
      title: '8시부터 10시까지 돌봄 서비스 요청합니다.',
    },
  ];
  const role = '돌봄';
  const [edit, setEdit] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [currPage, setCurrPage] = useState(0);
  // const [postData, setPostData] = useState([]);  // localStorage에 저장된 리스트
  // const [totalPostCount, setTotalPostCount] = useState(0); // 총 리스트 개수

  const handleSearchChange = (text) => {
    setSearchText(text);
  };

  const handleEditList = () => {
    if (window.confirm('선택한 돌봄 서비스들을 목록에서 삭제하시겠습니까?')) {
      // 삭제처리
      alert('삭제가 완료되었습니다.');
      setEdit(false);
    }
  };

  return (
    <div className={cx('mypage')}>
      <div className={cx('sidebar')}>
        <MySideBar />
      </div>
      <main>
        <MyTitle text="찜한 돌봄서비스" />
        <MySearch onSearchChange={handleSearchChange} />
        {edit ? (
          <>
            <button onClick={() => setEdit(false)} className={cx('cancel')}>
              취소
            </button>
            <button onClick={handleEditList} className={cx('complete')}>
              삭제
            </button>
          </>
        ) : (
          <button onClick={() => setEdit(true)} className={cx('edit')}>
            편집
          </button>
        )}
        <div className={cx('content')}>
          <MyList postList={postList} searchText={searchText} role={role} edit={edit} />
          <Pagination currPage={currPage} onClickPage={setCurrPage} pageCount={10} />
        </div>
      </main>
    </div>
  );
}
