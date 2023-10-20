import express from "express";
import {
  writeDataToFile,
  readDataFromFile,
  updateOriginalHash,
} from "../utils/index.js";
import { MESSAGE_FILENAME } from "../config.js";

const router = express.Router();

router.put("/", async (req, res) => {
  try {
    const config = req.body.config;
    await writeDataToFile("config.json", config);

    const message = await readDataFromFile(MESSAGE_FILENAME);
    await updateOriginalHash(message);

    res.status(200).json({ success: true });
  } catch {
    res.status(500).json({ error: "Error writing to the file" });
  }
});

export default router;
