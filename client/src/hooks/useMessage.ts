import { useMutation, useQuery } from "react-query";
import { Message, UpdateSuccessResponse } from "../api/types";
import { AxiosError, AxiosResponse } from "axios";
import { getMessage, updateMessage } from "../api";

export function useMessage() {
  const query = useQuery<Message, AxiosError>({
    queryKey: "message",
    queryFn: getMessage,
  });

  const mutation = useMutation<
    AxiosResponse<UpdateSuccessResponse>,
    AxiosError,
    Message
  >({
    mutationFn: updateMessage,
  });

  return { query, mutation };
}
