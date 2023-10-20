import { useQuery } from "react-query";
import { ModifiedHash } from "../api/types";
import { AxiosError } from "axios";
import { getModifiedHash } from "../api";

export function useModifiedHashQuery() {
  return useQuery<ModifiedHash, AxiosError>({
    queryKey: "modified-hash",
    queryFn: getModifiedHash,
  });
}
