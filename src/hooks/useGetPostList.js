import axios from 'axios';
import { useQuery } from 'react-query';
import { errorHandler } from 'lib';
import { useRecoilValue } from 'recoil';
import { isLoggedInState } from 'recoil/isLoggedInStateAtom';

const getPostList = async ({ controlTarget, controlTerm }) => {
  const params = {
    withCredentials: true,
  };

  if (controlTarget !== '전체') {
    params.careTarget = controlTarget;
  }

  if (controlTerm !== 'all') {
    params.isLongTerm = controlTerm;
  }

  const response = await axios.get('/api/post', { params });
  return response.data.data;
};

export function useGetPostList({ controlTarget, controlTerm }) {
  const loginStatus = useRecoilValue(isLoggedInState);
  return useQuery(['getPostList', controlTarget, controlTerm], () => getPostList({ controlTarget, controlTerm }), {
    onError: (error) => {
      errorHandler(error);
    },
    retry: 0,
    enabled: loginStatus !== 'LOADING',
  });
}
