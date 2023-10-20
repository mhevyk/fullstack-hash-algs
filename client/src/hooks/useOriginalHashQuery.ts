import { useQuery } from "react-query";
import { OriginalHash } from "../api/types";
import { AxiosError } from "axios";
import { getOriginalHash } from "../api";

export function useOriginalHashQuery() {
  return useQuery<OriginalHash, AxiosError>({
    queryKey: "hash",
    queryFn: getOriginalHash,
  });
}
