import axios from 'axios';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { errorHandler } from 'lib';

// const getPostList = async (pageNumber, careTarget, isLongTerm) => {
//   const response = await axios.get(`/api/post?page=${pageNumber}&limit=6&careTarget=${careTarget}&isLongTerm=${isLongTerm}`, {
//     params: {
//       page: pageNumber,
//       limit: 6,
//       careTarget,
//       isLongTerm,
//     },
//     withCredentials: true,
//   });
//   return response.data.data;
// };

// export function useGetPostList(pageNumber, careTarget, isLongTerm) {
//   const postQuery = useQuery(['getPostList', pageNumber, careTarget, isLongTerm], () => getPostList(pageNumber, careTarget, isLongTerm), {
//     cacheTime: 10 * 60 * 1000,
//     staleTime: Infinity,
//   });


// }


const getPostList = async () => {
  const response = await axios.get(`/api/post`, {
    withCredentials: true,
  });
  return response.data.data;
};

export function useGetPostList() {
  const navigate = useNavigate();

  return useQuery(['getPostList'], () => getPostList(), {
    cacheTime: 10 * 60 * 1000,
    staleTime: Infinity,
    onError: (error) => {
      errorHandler(error, navigate);
    },
    retry: 0,
  });
}
