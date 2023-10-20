import { writeFile } from "fs";

export async function writeDataToFile(
  path,
  data,
  onError = error => console.error(error)
) {
  writeFile(path, JSON.stringify(data, null, 2), onError);
}
