// 신청하기 모달 창 - 돌봄메이트 유저 정보 조회
import axios from 'axios';

const getMateUserInfo = async () => {
  const res = await axios.get('/api/chat');
  console.log(res.data)
  return res.data;
}


export default getMateUserInfo();