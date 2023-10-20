import express from "express";
import {
  readDataFromFile,
  createHash,
  bitDifferenceToChartData,
  flipBit,
  writeDataToFile,
} from "../utils/index.js";
import {
  MESSAGE_FILENAME,
  MODIFIED_HASH_FILENAME,
  ORIGINAL_HASH_FILENAME,
} from "../config.js";

const router = express.Router();

router.get("/chart/:bitToFlip", async (req, res) => {
  try {
    const bitToFlip = Number(req.params.bitToFlip) - 1;

    const message = await readDataFromFile(MESSAGE_FILENAME);
    const originalHash = await readDataFromFile(ORIGINAL_HASH_FILENAME);

    const modifiedMessage = flipBit(message, bitToFlip);
    const modifiedHash = await createHash(modifiedMessage);
    await writeDataToFile(MODIFIED_HASH_FILENAME, modifiedHash);

    const data = bitDifferenceToChartData(originalHash, modifiedHash);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send({ error: "Error writing to the file" });
  }
});

export default router;
