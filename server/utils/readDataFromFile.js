import { readFile } from "fs";

export async function readDataFromFile(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }

      try {
        const parsedData = JSON.parse(data);
        resolve(parsedData);
      } catch {
        resolve(data);
      }
    });
  });
}
