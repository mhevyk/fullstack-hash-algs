import { useMutation } from "react-query";
import { updateConfig } from "../api";
import { Config, UpdateSuccessResponse } from "../api/types";
import { AxiosError, AxiosResponse } from "axios";

export function useConfigMutation() {
  return useMutation<AxiosResponse<UpdateSuccessResponse>, AxiosError, Config>({
    mutationFn: updateConfig,
  });
}
