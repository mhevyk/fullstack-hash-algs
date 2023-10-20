import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import filesRouter from "./routes/files.js";
import avalancheRouter from "./routes/avalanche.js";
import configRouter from "./routes/config.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/files", filesRouter);
app.use("/avalanche", avalancheRouter);
app.use("/config", configRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
