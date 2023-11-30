import axios from 'axios';
import {useQueryClient } from 'react-query';
import { errorHandler } from 'lib';

// 채팅 메시지 전송(send) hooks
export const postMessage = async (chatId) => {

  const res = await axios.post(`/api/chat/send-message/${chatId}`,
    { content: content });
  
  return res.data;

}

export function usePostSendMessage(chatId) {
  const queryClient = useQueryClient();

  return useMutation(() => postMessage(chatId), {
    onSuccess: (response) => {
      queryClient.invalidateQueries('get-room');
    },
    onError: (error) => {
      errorHandler(error);
    },
    retry: 0,
  });
}



