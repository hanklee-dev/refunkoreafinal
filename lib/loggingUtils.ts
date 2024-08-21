import fs from "fs";
import path from "path";

const LOG_DIR = path.join(process.cwd(), "logs");

if (!fs.existsSync(LOG_DIR)) {
  fs.mkdirSync(LOG_DIR);
}

export function logError(message: string, error: any) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ERROR: ${message}\n${JSON.stringify(
    error,
    null,
    2
  )}\n\n`;

  fs.appendFileSync(path.join(LOG_DIR, "error.log"), logMessage);
  console.error(logMessage);
}

export function logInfo(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] INFO: ${message}\n`;

  fs.appendFileSync(path.join(LOG_DIR, "info.log"), logMessage);
  console.log(logMessage);
}
