import crypto from "crypto";
import { readDataFromFile } from "../utils/index.js";

export async function createHash(message) {
  const { hash_algorithm } = await readDataFromFile("config.json");
  return crypto.createHash(hash_algorithm).update(message).digest("hex");
}
