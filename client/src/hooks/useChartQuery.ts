import { useQuery } from "react-query";
import { getChartData } from "../api";
import { AxiosError } from "axios";
import { ChartData } from "../api/types";

export function useChartQuery(bitToFlip: string) {
  return useQuery<ChartData, AxiosError>({
    queryKey: ["chart", bitToFlip],
    queryFn: () => getChartData(bitToFlip),
  });
}
