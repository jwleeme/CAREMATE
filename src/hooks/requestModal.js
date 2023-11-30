// 신청하기 모달 창 영역 hooks
import axios from 'axios';
import { useQuery } from 'react-query';
import { errorHandler } from 'lib';


// 신청 form 돌봄메이트 유저 정보 조회
export const getMateUserInfo = async (param) => {
  console.log(param)
  const res = await axios.get(`/api/chat/applicate-info/${param.postId}`);

  return res.data.data;

}

export function useGetMateUserInfo(param) { // postID 호출함수
  return useQuery('get-mate-user', () => getMateUserInfo(param), {
    onError: (error) => {
      errorHandler(error);
    },
    retry: 0,
  })
}


// 신청하기(send) 함수
export const postApplicate = async (param) => {

  const res = await axios.post(`/api/chat/applicate`, {data: param});
 
  return res.data;

}

export function useApplicate(param) {
  return useQuery('applicateResponse', () => postApplicate(param), {
    onError: (error) => {
      errorHandler(error);
    },
    retry: 0,
  })
}

