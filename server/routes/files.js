import express from "express";
import {
  readDataFromFile,
  writeDataToFile,
  updateOriginalHash,
} from "../utils/index.js";
import {
  MESSAGE_FILENAME,
  MODIFIED_HASH_FILENAME,
  ORIGINAL_HASH_FILENAME,
} from "../config.js";

const router = express.Router();

router.get("/message", async (req, res) => {
  try {
    const data = await readDataFromFile(MESSAGE_FILENAME);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Помилка читання файлу" });
  }
});

router.get("/original-hash", async (req, res) => {
  try {
    const data = await readDataFromFile(ORIGINAL_HASH_FILENAME);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Помилка читання файлу" });
  }
});

router.get("/modified-hash", async (req, res) => {
  try {
    const data = await readDataFromFile(MODIFIED_HASH_FILENAME);
    res.status(200).send(data);
  } catch (error) {
    res.status(500).json({ error: "Помилка читання файлу" });
  }
});

router.post("/", async (req, res) => {
  try {
    const message = req.body.message;
    await writeDataToFile(MESSAGE_FILENAME, message);
    await updateOriginalHash(message);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Помилка читання або запису файлу(ів)" });
  }
});

export default router;
