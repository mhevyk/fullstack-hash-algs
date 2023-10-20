import { ORIGINAL_HASH_FILENAME } from "../config.js";
import { createHash, writeDataToFile } from "./index.js";

export async function updateOriginalHash(message) {
  const hash = await createHash(message);
  await writeDataToFile(ORIGINAL_HASH_FILENAME, hash);
}
