import React, { useState, useRef, useCallback } from 'react';
import styles from './MyPage.module.scss';
import cs from 'classnames/bind';
import ProfileImage from '../../assets/user.png';
import { MyTitle, MySideBar, Region } from '../../components';
const cx = cs.bind(styles);

export default function MyPage() {
  // 임시 데이터 (추후 get 요청)
  const [userInfo, setUserInfo] = useState({
    profileImg: '',
    email: 'test@test.com',
    name: 'user1',
    phone: '01011112222',
    age: '20대',
    gender: '여자',
    region: '서울특별시',
    sub_region: '강남구',
    role: '돌봄유저',
    introduce: '안녕하세요! 저는 사회복지사 2급 자격증을 가지고 있습니다.',
  });
  const formattedPhone = userInfo.phone.replace(/(\d{3})(\d{3,4})(\d{4})/, '$1-$2-$3');

  const [edit, setEdit] = useState(false);
  const [editPwd, setEditPwd] = useState(false);
  const imgRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(userInfo.profileImg || ProfileImage);

  // img 수정
  const onUploadImage = useCallback((e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const onUploadImageButtonClick = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, []);

  const handleEdit = () => {
    // put 요청 > 데이터 get 요청
    alert('수정이 완료되었습니다.');
    setEdit(false);
  };

  return (
    <div className={cx('mypage')}>
      <div className={cx('sidebar')}>
        <MySideBar />
      </div>
      <main>
        <MyTitle text="MY PAGE" />
        <div className={cx('content')}>
          <div className={cx('profile')}>
            {edit ? (
              <>
                <img src={selectedImage} alt="이미지 미리보기" />
                <input type="file" accept="image/*" name="thumbnail" ref={imgRef} onChange={onUploadImage} />
                <button onClick={onUploadImageButtonClick} className={cx('editImg')}>
                  변경하기
                </button>
              </>
            ) : (
              <img src={ProfileImage} alt="프로필사진" />
            )}
          </div>
          <div className={cx('info')}>
            <div className={cx('left')}>
              <div className={cx('email')}>
                <h1>이메일</h1>
                <p>{userInfo.email}</p>
              </div>
              <div className={cx('name')}>
                <h1>이름</h1>
                {edit ? <input type="text" defaultValue={userInfo.name} /> : <p>{userInfo.name}</p>}
              </div>
              {edit && (
                <button className={cx('editPwd')} onClick={() => setEditPwd(true)}>
                  비밀번호 수정
                </button>
              )}
              {editPwd && (
                <div>
                  <div className={cx('currentPwd')}>
                    <h1>기존 비밀번호</h1>
                    <input type="password" />
                  </div>
                  <div className={cx('newPwd')}>
                    <h1>새 비밀번호</h1>
                    <input type="password" />
                  </div>
                  <div className={cx('confirmNewPwd')}>
                    <h1>새 비밀번호 확인</h1>
                    <input type="password" />
                  </div>
                  <button onClick={() => setEditPwd(false)} className={cx('cancelPwd')}>
                    비밀번호 수정 취소
                  </button>
                </div>
              )}
            </div>
            <div className={cx('right')}>
              <div className={cx('phone')}>
                <h1>전화번호</h1>
                {edit ? <input type="text" defaultValue={userInfo.phone} /> : <p>{formattedPhone}</p>}
              </div>
              <div className={cx('age')}>
                <h1>나이</h1>
                {edit ? (
                  <select defaultValue={userInfo.age}>
                    <option value="20대">20대</option>
                    <option value="30대">30대</option>
                    <option value="40대">40대</option>
                    <option value="50대">50대</option>
                    <option value="60대 이상">60대 이상</option>
                  </select>
                ) : (
                  <p>{userInfo.age}</p>
                )}
              </div>
              <div className={cx('gender')}>
                <h1>성별</h1>
                {edit ? (
                  <select defaultValue={userInfo.gender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                  </select>
                ) : (
                  <p>{userInfo.gender}</p>
                )}
              </div>
              <div className={cx('region')}>
                <h1>지역</h1>
                {edit ? (
                  <Region region1={userInfo.region} region2={userInfo.sub_region} />
                ) : (
                  <p>
                    {userInfo.region}/{userInfo.sub_region}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={cx('introduce')}>
          <h1>INTRODUCE</h1>
          <span>{userInfo.role}</span>
          {edit ? <textarea defaultValue={userInfo.introduce} /> : <p>{userInfo.introduce}</p>}
        </div>
        {edit ? (
          ''
        ) : (
          <button className={cx('editBtn')} onClick={() => setEdit(true)}>
            수정하기
          </button>
        )}
        {edit && (
          <div>
            <button className={cx('saveBtn')} onClick={handleEdit}>
              수정완료
            </button>
            <button
              className={cx('cancelBtn')}
              onClick={() => {
                setEdit(false);
                setEditPwd(false);
                setSelectedImage(userInfo.profileImg || ProfileImage);
              }}
            >
              취소
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
