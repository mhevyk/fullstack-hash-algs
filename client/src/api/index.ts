import API from "./base";
import {
  ChartData,
  Config,
  Message,
  OriginalHash,
  ModifiedHash,
  UpdateSuccessResponse,
} from "./types";

export async function getMessage() {
  return API.get<Message>(`/files/message`).then(response => response.data);
}

export async function getOriginalHash() {
  return API.get<OriginalHash>("/files/original-hash").then(
    response => response.data
  );
}

export async function getModifiedHash() {
  return API.get<ModifiedHash>("/files/modified-hash").then(
    response => response.data
  );
}

export async function updateMessage(message: Message) {
  return API.post<UpdateSuccessResponse>("/files", { message });
}

export async function updateConfig(config: Config) {
  return API.put<UpdateSuccessResponse>("/config", { config });
}

export async function getChartData(bitToFlip: string) {
  return API.get<ChartData>(`/avalanche/chart/${bitToFlip}`).then(
    response => response.data
  );
}
