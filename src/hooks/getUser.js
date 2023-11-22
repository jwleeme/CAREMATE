import axios from 'axios';
import { useQuery } from 'react-query';

const getUser = async () => {
  const response = await axios.get('http://localhost:5001/api/user');
  return response.data.data;
};

export function useGetUser() {
  return useQuery('get-user', () => getUser());
}
